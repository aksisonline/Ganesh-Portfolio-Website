'use client'

import type { IPost } from '@/types'
import React from 'react'
import Link from 'next/link'
import formatDate from '@/utils/format-date'

const BlogPostItem: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Link href={'/blog/' + post.slug} className={`block bg-white/50 px-3 py-5 backdrop-blur dark:bg-black/80 md:px-5 ${post.metadata.highlight ? 'text-yellow-500' : ''}`}>
      <h3 className={`text-lg md:text-xl ${post.metadata.highlight ? 'text-yellow-500' : ''}`}>{post.metadata.title}</h3>
      <h4 className="text-sm md:text-sm">{post.metadata.roles}</h4>
      <p className="text-sm opacity-60 dark:text-neutral-400">{post.metadata.summary ? post.metadata.summary : formatDate(post.metadata.publishedAt)}</p>
    </Link>
  )
}

export default BlogPostItem