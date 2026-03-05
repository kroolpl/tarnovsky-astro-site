-- Create a new storage bucket for listing images
insert into storage.buckets (id, name, public)
values ('listings', 'listings', true)
on conflict (id) do nothing;

-- Set up Row Level Security (RLS) for the storage bucket

-- Allow public access to read files
create policy "Give users public access to images folder"
on storage.objects for select
to public
using ( bucket_id = 'listings' );

-- Allow authenticated users to upload files
create policy "Allow authenticated users to upload files"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'listings' );

-- Allow authenticated users to update their own files (optional, but good practice if they want to replace an image)
create policy "Allow users to update their own files"
on storage.objects for update
to authenticated
using ( bucket_id = 'listings' and auth.uid() = owner )
with check ( bucket_id = 'listings' and auth.uid() = owner );

-- Allow authenticated users to delete their own files
create policy "Allow users to delete their own files"
on storage.objects for delete
to authenticated
using ( bucket_id = 'listings' and auth.uid() = owner );
