
-- Update the test user's password to 'password123'
-- We use extensions schema prefix to be safe
DO $$
BEGIN
  UPDATE auth.users 
  SET encrypted_password = extensions.crypt('password123', extensions.gen_salt('bf'))
  WHERE email = 'tester@tarnow.tech';
END $$;
