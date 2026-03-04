
DO $$
DECLARE
  test_user_id UUID := '33333333-3333-3333-3333-333333333333';
  test_user_email TEXT := 'tester@tarnow.tech';
  ident_id UUID := gen_random_uuid();
BEGIN
  -- Clean up
  DELETE FROM auth.identities WHERE user_id = test_user_id;
  DELETE FROM auth.users WHERE id = test_user_id OR email = test_user_email;
  DELETE FROM public.profiles WHERE id = test_user_id OR username = 'tester';
  
  -- Insert user with valid pg_crypto bcrypt hash
  INSERT INTO auth.users (
    id, instance_id, aud, role, email,
    encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at,
    confirmation_token, recovery_token, email_change_token_new, email_change
  )
  VALUES (
    test_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', test_user_email,
    extensions.crypt('password123', extensions.gen_salt('bf')),
    now(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "Test User", "username": "tester"}',
    now(), now(), '', '', '', ''
  );
  
  -- Insert identity dynamically based on schema
  BEGIN
    EXECUTE 'INSERT INTO auth.identities (id, user_id, provider_id, identity_data, provider, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, now(), now())'
    USING ident_id, test_user_id, test_user_id::text, jsonb_build_object('sub', test_user_id::text, 'email', test_user_email), 'email';
  EXCEPTION WHEN OTHERS THEN
    EXECUTE 'INSERT INTO auth.identities (id, user_id, identity_data, provider, created_at, updated_at) VALUES ($1, $2, $3, $4, now(), now())'
    USING ident_id, test_user_id, jsonb_build_object('sub', test_user_id::text, 'email', test_user_email), 'email';
  END;
  
  -- Sync public profile
  INSERT INTO public.profiles (id, username, full_name, role)
  VALUES (test_user_id, 'tester', 'Test User', 'user');
END $$;
