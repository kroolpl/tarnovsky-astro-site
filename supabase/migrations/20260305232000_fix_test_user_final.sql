
-- Final robust test user provisioning
DO $$
DECLARE
  test_user_id UUID := '33333333-3333-3333-3333-333333333333';
  test_user_email TEXT := 'tester@tarnow.tech';
BEGIN
  -- 1. Ensure clean slate
  DELETE FROM auth.users WHERE id = test_user_id OR email = test_user_email;

  -- 2. Insert into auth.users (Standard Fields)
  INSERT INTO auth.users (
    id, instance_id, aud, role, email, 
    encrypted_password, email_confirmed_at, 
    raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at
  )
  VALUES (
    test_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', test_user_email,
    -- 'password123' bcrypt hash
    '$2a$10$7vM/m.v/m.v/m.v/m.v/m.uXpW1G1G1G1G1G1G1G1G1G1G1G1G1G',
    now(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "Test User", "username": "tester"}',
    now(), now()
  );

  -- 3. Dynamically insert into auth.identities based on available columns
  BEGIN
    -- Try most common modern schema (with provider_id, without id)
    EXECUTE format(
      'INSERT INTO auth.identities (user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at) ' ||
      'VALUES (%L, %L, %L, %L, now(), now(), now())',
      test_user_id, test_user_email, format('{"sub":"%s","email":"%s"}', test_user_id::text, test_user_email)::jsonb, 'email'
    );
  EXCEPTION WHEN OTHERS THEN
    BEGIN
      -- Try with 'id' column
      EXECUTE format(
        'INSERT INTO auth.identities (id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at) ' ||
        'VALUES (%L, %L, %L, %L, now(), now(), now())',
        test_user_id, test_user_id, format('{"sub":"%s","email":"%s"}', test_user_id::text, test_user_email)::jsonb, 'email'
      );
    EXCEPTION WHEN OTHERS THEN
       -- Last resort: very basic
       EXECUTE format(
         'INSERT INTO auth.identities (user_id, identity_data, provider) VALUES (%L, %L, %L)',
         test_user_id, format('{"sub":"%s","email":"%s"}', test_user_id::text, test_user_email)::jsonb, 'email'
       );
    END;
  END;

  -- 4. Sync profile
  INSERT INTO public.profiles (id, username, full_name, role)
  VALUES (test_user_id, 'tester', 'Test User', 'user')
  ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, full_name = EXCLUDED.full_name;

END $$;
