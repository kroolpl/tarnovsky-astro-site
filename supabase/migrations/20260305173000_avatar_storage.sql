-- Create a new storage bucket for user avatars
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

-- Set up Row Level Security (RLS) for the avatars bucket

-- Allow public access to read avatar files
create policy "Give users public access to avatars folder"
on storage.objects for select
to public
using ( bucket_id = 'avatars' );

-- Allow authenticated users to upload their own avatar
create policy "Allow authenticated users to upload their own avatar"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'avatars' );

-- Allow authenticated users to update their own avatar
create policy "Allow users to update their own avatar"
on storage.objects for update
to authenticated
using ( bucket_id = 'avatars' and auth.uid() = owner )
with check ( bucket_id = 'avatars' and auth.uid() = owner );

-- Allow authenticated users to delete their own avatar
create policy "Allow users to delete their own avatar"
on storage.objects for delete
to authenticated
using ( bucket_id = 'avatars' and auth.uid() = owner );
