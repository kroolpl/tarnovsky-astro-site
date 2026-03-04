-- 1. Create a dummy system user in auth.users if it doesn't exist
-- Note: This is a hack for seeding remote DBs where we can't easily use GoTrue CLI.
-- We use a known UUID for the seller to link listings.
DO $$
DECLARE
  dummy_user_id UUID := '00000000-0000-0000-0000-000000000000';
BEGIN
  -- Insert into auth.users (minimum required fields)
  INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, role, confirmation_token, recovery_token, email_change_token_new, email_change_confirm_status)
  VALUES (
    dummy_user_id,
    'system@tarnow.tech',
    '$2a$10$f9sH0/8Z.m2VpB1m7... (dummy)',
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"username":"system_admin"}',
    now(),
    now(),
    'authenticated',
    '', '', '', 0
  ) ON CONFLICT (id) DO NOTHING;

  -- Ensure profile exists
  INSERT INTO public.profiles (id, username, full_name, role)
  VALUES (dummy_user_id, 'tarnow_tech_admin', 'Administrator Systemu', 'admin')
  ON CONFLICT (id) DO NOTHING;
END $$;

-- 2. Insert Categories (with ON CONFLICT to prevent errors)
INSERT INTO categories (name, slug) 
VALUES 
  ('Laptopy', 'laptopy'),
  ('Telefony', 'telefony'),
  ('Akcesoria', 'akcesoria'),
  ('Nieruchomości', 'nieruchomosci'),
  ('Motoryzacja', 'motoryzacja'),
  ('Praca', 'praca'),
  ('Sport', 'sport'),
  ('Moda', 'moda'),
  ('Audio', 'audio')
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert listings (linked to the system user and random categories)
INSERT INTO listings (title, description, price, location, seller_id, category_id, image_url, is_featured, is_promoted, tags)
VALUES
  (
    'MacBook Air M1 8/256GB', 
    'Sprzedam MacBooka Air z procesorem M1. Stan idealny, bateria 98% kondycji. Kupiony w polskim salonie.', 
    '2 850 PLN', 
    'Tarnów, Centrum', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'laptopy'), 
    'https://picsum.photos/seed/macbook/800/800', 
    true, false, 
    ARRAY['M1', 'Apple', 'Laptop']
  ),
  (
    'Klawiatura Custom Mechanical', 
    'Klawiatura mechaniczna zbudowana na bazie GMMK Pro. Switche Gateron Yellow, lubrykowane.', 
    '450 PLN', 
    'Tarnów, Mościce', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'akcesoria'), 
    'https://picsum.photos/seed/keyboard/800/800', 
    true, false, 
    ARRAY['Custom', 'Mechanical', 'GMMK']
  ),
  (
    'iPhone 13 Pro Graphite', 
    'iPhone 13 Pro w kolorze Graphite. 128GB pamięci. Od nowości w etui i ze szkłem hartowanym.', 
    '3 100 PLN', 
    'Tarnów, Piaskówka', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'telefony'), 
    'https://picsum.photos/seed/iphone/800/800', 
    true, true, 
    ARRAY['iPhone', 'Apple', 'Pro']
  ),
  (
    'MacBook Pro 14" M2 Pro', 
    'Potężna maszyna do pracy. Procesor M2 Pro, 16GB RAM. Stan wizualny jak nowy.', 
    '7 400 PLN', 
    'Tarnów', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'laptopy'), 
    'https://picsum.photos/seed/mbp14/800/800', 
    false, true, 
    ARRAY['M2', 'Pro', 'Editing']
  ),
  (
    'Kawalerka ul. Słoneczna', 
    'Przytulna kawalerka po remoncie. Blisko centrum, niskie opłaty.', 
    '1 800 PLN', 
    'Tarnów, Słoneczna', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'nieruchomosci'), 
    'https://picsum.photos/seed/flat/800/800', 
    false, false, 
    ARRAY['Wynajem', 'Kawalerka']
  ),
  (
    'Opony Continental 205/55R16', 
    'Komplet opon letnich w bardzo dobrym stanie. Bieżnik ok. 6mm.', 
    '600 PLN', 
    'Tarnów, Klikowa', 
    '00000000-0000-0000-0000-000000000000', 
    (SELECT id FROM categories WHERE slug = 'motoryzacja'), 
    'https://picsum.photos/seed/tyres/800/800', 
    false, false, 
    ARRAY['Opony', 'Lato', 'Continental']
  );
