import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { base_url } from 'configs/env'
import Bleed from 'pliny/ui/Bleed'
import { ReactNode } from 'react'
import { BlogContent } from './ListLayoutWithTags'

interface LayoutProps {
  content: BlogContent
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { title, cover } = content
  const displayImage = `${base_url}/assets/${cover}?quality=25`

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[2/1] w-full">
                  <Image src={displayImage} alt={title} fill className="object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
          {/* {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )} */}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-primary"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-primary"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
