-- Add category_details JSONB column to listings
ALTER TABLE public.listings ADD COLUMN IF NOT EXISTS category_details JSONB DEFAULT '{}'::jsonb;

-- Insert or Update Categories
INSERT INTO public.categories (name, slug)
VALUES
  ('Nieruchomości', 'nieruchomosci'),
  ('Praca', 'praca'),
  ('Usługi', 'uslugi'),
  ('Oddam / Zamienię', 'oddam-zamienie'),
  ('Motoryzacja', 'motoryzacja'),
  ('Drobne zlecenia', 'drobne-zlecenia')
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;
