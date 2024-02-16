/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ArrowIcon from 'app/assets/images/icons/arrow1.svg'
import tagData from 'app/tag-data.json'
import { base_url } from 'configs/env'
import { slug } from 'github-slugger'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export interface BlogContent {
  id: number | 0
  title: string
  category: string
  tags: string[]
  content?: string
  author: string
  description: string
  thumbnail: string
  slug: string
}
interface ListLayoutProps {
  posts: BlogContent[]
  title: string
  initialDisplayPosts?: BlogContent[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between font-bold text-primary">
        {!prevPage && (
          <button className="cursor-auto uppercase disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="uppercase"
          >
            Previous
          </Link>
        )}
        <span className="">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto uppercase disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next" className="uppercase">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="px-6 pb-10 lg:px-20 lg:pt-10">
        <div className="pt-6">
          <h1 className="block py-[13px] font-rajdhani text-xl font-bold tracking-tight text-primary lg:hidden">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-6">
          <div className="hidden h-full max-h-screen min-w-[358px] max-w-[358px] flex-wrap overflow-auto rounded bg-primary shadow-md shadow-gray-800/40 sm:flex">
            <div className="px-6 pb-[31px] pt-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="mt-2 text-2xl font-bold uppercase text-secondary">All Posts</h3>
              ) : (
                <Link href={`/blog`} className="text-2xl font-bold uppercase text-secondary ">
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3 list-inside list-disc text-white">
                      {pathname.split('/tags/')[1] === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-base font-bold uppercase text-white">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="px-3 py-2 text-base font-bold uppercase text-white hover:underline"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-358px-24px)]">
            <ul className="space-y-[13px] lg:space-y-4">
              {displayPosts.map((post) => {
                const { id, title, description, tags, thumbnail, slug } = post
                return (
                  <li className="border border-primary" key={id}>
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100 ">
                      <div className="space-y-2 p-3 lg:p-4">
                        {/* <div className="">
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-xs font-bold text-primary">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                        </div> */}
                        <div className="flex gap-[15px] lg:gap-5 ">
                          <img
                            src={`${base_url}/assets/${thumbnail}?quality=25`}
                            alt=""
                            className="h-[142px] w-[125px] object-cover lg:w-[170px]"
                          />
                          <article className="flex flex-col justify-between space-y-2 xl:space-y-0">
                            <div className="space-y-3">
                              <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                  {/* <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link> */}
                                </h2>
                                <div className="flex flex-wrap">
                                  {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                                </div>
                              </div>
                              <div className="prose line-clamp-3 max-w-none text-base font-medium text-primary">
                                {title}
                              </div>
                              <div className="prose line-clamp-3 max-w-none text-base font-light text-primary mb-3">
                                {description}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <p className="font-rajdhani text-base font-bold text-secondary">
                                READ MORE
                              </p>
                              <Image src={ArrowIcon} alt="arrow icon" className="h-4 w-4" />
                            </div>
                          </article>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
