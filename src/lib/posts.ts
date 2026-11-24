import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All posts, newest first. Drafts are visible in dev, excluded in production builds. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** YYYY-MM-DD in UTC, so dates don't shift with the build machine's timezone. */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
