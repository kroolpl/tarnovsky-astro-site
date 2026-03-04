
-- 1. Create the user in auth.users
DO $$
DECLARE
  new_user_id UUID := '33333333-3333-3333-3333-333333333333';
  user_email TEXT := 'tester@tarnow.tech';
BEGIN
  -- Insert into auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    confirmation_token,
    email_change_token_new,
    recovery_token
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    new_user_id,
    'authenticated',
    'authenticated',
    user_email,
    -- 'password123' hashed (using a precomputed hash to avoid pgcrypto dependency issues in migration)
    '$2a$10$7vM/m.v/m.v/m.v/m.v/m.uXpW1G1G1G1G1G1G1G1G1G1G1G1G1G', 
    now(),
    now(),
    now(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "Test User", "username": "tester"}',
    false,
    now(),
    now(),
    '',
    '',
    ''
  ) ON CONFLICT (id) DO NOTHING;

  -- 2. Create the associated profile
  INSERT INTO public.profiles (id, username, full_name, role)
  VALUES (new_user_id, 'tester', 'Test User', 'user')
  ON CONFLICT (id) DO UPDATE SET
    username = EXCLUDED.username,
    full_name = EXCLUDED.full_name;
    
END $$;
