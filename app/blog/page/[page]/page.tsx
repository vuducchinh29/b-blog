import ListLayout, { BlogContent } from '@/layouts/ListLayoutWithTags'
import blogAPI from 'apis/blog-api'

const POSTS_PER_PAGE = 100

export const generateStaticParams = async () => {
  const posts = (await blogAPI.getBlogs(POSTS_PER_PAGE)).data
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_: BlogContent) => ({ page: _.id.toString() }))

  return paths
}

async function getData() {
  const posts = (await blogAPI.getBlogs(POSTS_PER_PAGE)).data

  return posts
}

export default async function Page({ params }: { params: { page: string } }) {
  const posts = await getData()
  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
