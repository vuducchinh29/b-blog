import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-xs font-medium uppercase text-primary hover:underline"
    >
      <div className="bg-secondary px-2.5 py-[3px]">{text.split(' ').join('-')}</div>
    </Link>
  )
}

export default Tag
