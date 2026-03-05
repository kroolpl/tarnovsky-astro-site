-- Add image_urls column and migrate data from image_url
ALTER TABLE listings ADD COLUMN image_urls TEXT[] DEFAULT '{}';

-- Migrate existing data
UPDATE listings SET image_urls = ARRAY[image_url] WHERE image_url IS NOT NULL;

-- Drop old column
ALTER TABLE listings DROP COLUMN image_url;
