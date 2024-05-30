import type { Metadata } from 'next'
import { getBlogPosts } from '@/utils/get-blog-posts'
import PageTitle from '../components/PageTitle'
import BlogPostItem from './components/BlogPostItem'

export const metadata: Metadata = {
  title: 'Projects - Ganesh Alla',
  openGraph: {
    title: 'Projects - Ganesh Alla',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default async function BlogPage() {
  const blogs = getBlogPosts().sort((a, b) => {
    if (a.metadata.highlight && !b.metadata.highlight) {
      return -1
    }
    if (!a.metadata.highlight && b.metadata.highlight) {
      return 1
    }
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  const highlightedBlogs = blogs.filter((post) => post.metadata.highlight)
  const otherBlogs = blogs.filter((post) => !post.metadata.highlight)

  return (
    <>
      <PageTitle title="Projects" />
      <h2 className="mb-2 text-xl font-bold" style={{ paddingLeft: '8px' }}>
        Highlights
      </h2>
      <ul className="grid grid-cols-2 gap-3 md:mb-5">
        {highlightedBlogs.map((post) => (
          <li key={post.slug}>
            <BlogPostItem post={post} />
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 gap-3 md:mb-5">
        {otherBlogs.map((post) => (
          <li key={post.slug}>
            <BlogPostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
