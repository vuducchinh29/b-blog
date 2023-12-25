import 'css/prism.css'
import 'katex/dist/katex.css'

import siteMetadata from '@/data/siteMetadata'
import PostBanner from '@/layouts/PostBanner'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'
import blogAPI from 'apis/blog-api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const base_url = process.env.NEXT_PUBLIC_API_URI

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = {
    id: 2,
    title: 'FriendTech Là Gì? Giải Mã Nền Tảng SocialFi Hot Nhất Hiện Nay',
    category: 'Blog',
    tags: ['FriendTech', 'SocialFi'],
    author: 'B.Army Research',
    description:
      'FriendTech là gì? Tại sao FriendTech lại thu hút người dùng và các KOL sử dụng? Hãy cùng B.Army tìm hiểu về dự án SocialFi độc đáo này trong bài viết ngày hôm nay.',
    cover: 'e86fb8f7-55c2-4ace-83aa-66582ea93879',
    content: '',
  }
  const author = post?.author || ['default']
  if (!post) {
    return
  }

  const publishedAt = new Date().toISOString()
  const modifiedAt = new Date().toISOString()
  const imageList = [`${base_url}/assets/${post.cover}?quality=25`]
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: siteMetadata.title,
      locale: 'vi_VN',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: author,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = (await blogAPI.getBlogs()).data.map((_) => {
    return { id: _.id + '' }
  })

  return paths
}

async function getData(id: string) {
  const post = (await blogAPI.getBlogById(Number(id))).data

  return post
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getData(params.id)
  if (!post) {
    return notFound()
  }

  const prev = { path: '/blog/1', title: '' }
  const next = { path: '/blog/2', title: '' }

  const mainContent = post

  const Layout = layouts.PostBanner

  return (
    <>
      <Layout content={mainContent} next={next} prev={prev}>
        {/* <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} /> */}
        {/* <div className="" dangerouslySetInnerHTML={{ __html: '' }}>
          {}
        </div> */}
      </Layout>
    </>
  )
}
