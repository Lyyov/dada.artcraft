import { WorkOnePage } from '@/_pages/works';
import { WORKS_CONTENT } from '@/entities/works/consts/worksContent';
import { IWork } from '@/entities/works/types/worksTypes';
import { notFound } from 'next/navigation'

function getWorkBySlug(slug: string) {
  const work = WORKS_CONTENT.find((work) => work.slug === slug);
  if (!work) notFound()
  return work;
}

export function generateStaticParams() {

  return WORKS_CONTENT.map(({ slug }: IWork) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = getWorkBySlug(slug)

  return {
    slug: work.slug,
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = getWorkBySlug(slug)

  return (
    <div className='bg-background-secondary'>
      <WorkOnePage {...work} />
    </div>
  )
}