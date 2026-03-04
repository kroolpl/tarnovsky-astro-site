
-- Clean up broken test user
DELETE FROM auth.users WHERE email = 'tester@tarnow.tech';
DELETE FROM public.profiles WHERE id = '33333333-3333-3333-3333-333333333333';
