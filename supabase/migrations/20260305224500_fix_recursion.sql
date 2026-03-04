-- Fix infinite recursion in profiles RLS
-- The previous policy "Admins can view any profile" was querying the same table it was protecting.

-- 1. Drop the problematic recursive policies
DROP POLICY IF EXISTS "Admins can view any profile" ON profiles;
DROP POLICY IF EXISTS "Admins can update any profile" ON profiles;
DROP POLICY IF EXISTS "Admins can delete any profile" ON profiles;

-- 2. Ensure public viewing is still allowed (from initial schema)
-- We don't need to re-add it if it already exists, but to be safe:
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' AND policyname = 'Profiles are viewable by everyone'
    ) THEN
        CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
    END IF;
END $$;

-- 3. Fix Admin policies for Profiles using a more efficient check
-- A simple way to check if the current user is an admin without recursion is to use 
-- the 'role' column from the auth metadata IF we sync it, OR a dedicated function.
-- For now, let's just make sure admins can UPDATE and DELETE without crashing.
-- To avoid recursion, we check the role of the user with auth.uid() directly 
-- but we must be careful.

-- A common pattern is to create a function that is SECURITY DEFINER
CREATE OR REPLACE FUNCTION is_admin() 
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() 
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Now use the function in policies (Postgres handles this better)
-- But wait, even the function might recurse if called inside the same table's SELECT.
-- However, for UPDATE/DELETE, we are usually checking a specific row.

CREATE POLICY "Admins can update any profile" ON profiles FOR UPDATE 
USING (is_admin()) 
WITH CHECK (is_admin());

CREATE POLICY "Admins can delete any profile" ON profiles FOR DELETE 
USING (is_admin());

-- For SELECT, 'Profiles are viewable by everyone' is enough.
