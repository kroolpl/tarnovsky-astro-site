-- 1. Create Categories Table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Profiles Table (extends Auth)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Listings Table
CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT,
  price TEXT, -- Stored as text to match mockup "2 850 PLN" format, or use NUMERIC + currency
  location TEXT,
  seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_promoted BOOLEAN DEFAULT FALSE,
  tags TEXT[] DEFAULT '{}'
);

-- 4. Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- 5. Policies
-- Categories: Anyone can read
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);

-- Profiles: Anyone can read, users can update their own
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Listings: Anyone can read, users can insert/update/delete their own
CREATE POLICY "Listings are viewable by everyone" ON listings FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert listings" ON listings FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update their own listings" ON listings FOR UPDATE USING (auth.uid() = seller_id);
CREATE POLICY "Users can delete their own listings" ON listings FOR DELETE USING (auth.uid() = seller_id);
