import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import { ReactNode } from 'react'
import { BlogContent } from './ListLayoutWithTags'

interface LayoutProps {
  content: BlogContent
  authorDetails: string
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { title, cover, tags } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="px-6 lg:px-20">
        <div className="">
          <header className="pb-4 pt-6 lg:pb-10">
            <div className="space-y-1 text-center">
              <dl className="space-y-10"></dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6">
            <div className=" hidden divide-white bg-primary px-6 font-poppins text-sm font-medium leading-5 lg:block xl:col-start-1 xl:row-start-2 xl:divide-y">
              <dl className="py-9">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2">
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="text-sm font-medium text-white">Authors</dt>
                        <dd className="text-base font-bold text-white">{authorDetails}</dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-base font-bold uppercase tracking-wide text-secondary">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-base font-bold uppercase tracking-wide text-secondary">
                        Previous Article
                      </h2>
                      <div className="hover:text-primary-600 dark:hover:text-primary-400 text-primary">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <h2 className="text-base font-bold uppercase tracking-wide text-secondary">
                        Next Article
                      </h2>
                      <div className="hover:text-primary-600 dark:hover:text-primary-400 text-primary">
                        <Link href={`/${next.path}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/blog`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 font-bold text-secondary"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="blog-paragraph max-w-none pb-8">{children}</div>
              {/* <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div> */}
              {/* {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )} */}
            </div>
            <footer></footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
