-- Insert Categories
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
  ('Audio', 'audio');

-- Note: Inserting Profiles and Listings requires valid Auth UIDs if using RLS.
-- For local testing or seeding via Admin SQL, use a placeholder UUID:
-- INSERT INTO profiles (id, username, full_name) VALUES ('00000000-0000-0000-0000-000000000000', 'system', 'System Administrator');
-- INSERT INTO listings (title, price, image_url, is_featured, seller_id, category_id) ...
