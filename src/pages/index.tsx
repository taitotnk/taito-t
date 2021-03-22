import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import index_style from '../styles/index.module.css'
import { siteTitle } from '../components/layout'

export default function Home({ allPostsData }: {
  allPostsData: {
    id: string
    title: string;
    created_at: string;
    updated_at: string;
    thumbnail: string;
    tag: string;
  }[]
}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Taitoの技術メモ＆ポートフォリオサイトです" />
        <meta property="og:image" content="/images/taitologo.jpg" />
        <meta property="twitter:image" content="/images/taitologo.jpg" />
      </Head>
      <h1 className={index_style.name}>I am Taito</h1>
      <div className={index_style.icon_cont}>
        <a href="https://github.com/Taito-Code" target="_blank" rel="noopener"><Image className={index_style.icon} src='/github-icon.png' height={70} width={70} alt="github-icon" /></a>
        <a href="https://twitter.com/taito_1211" target="_blank" rel="noopener"><Image className={index_style.icon} src='/twitter-icon.png' height={70} width={70} alt="twitter-icon" /></a>
        <a href="https://www.instagram.com/taito_tanaka" target="_blank" rel="noopener"><Image className={index_style.icon} src='/instagram-icon.png' height={70} width={70} alt="instagram-icon" /></a>
      </div>
      {allPostsData.map(({ id, title, created_at, thumbnail, tag }) => (
        <div className={index_style.post_list}>
          <div className="max-w-lg rounded overflow-hidden shadow-md my-2" >
            <Link href={`/posts/${id}`} key={id}>
              <a>
                <Image className="w-full" src={thumbnail} height={300} width={600} alt="thumbnail" key={thumbnail} />
              </a>
            </Link>
            <div className="px-6 py-4">
              <div className={index_style.title}>
                <Link href={`/posts/${id}`} key={id}>
                  <a><div className="font-bold text-xl mb-2" ><h2 key={title}>{title}</h2></div></a>
                </Link>
              </div>
            </div>
            <div className="px-0 py-0">
              <div className={index_style.tag} ><span className="inline-block bg-grey-lighter rounded-full px-0 py-0 text-sm font-semibold text-grey-darker mr-0"><h1 key={tag} >#{tag}</h1></span></div>
              <h2 className={index_style.date} key={created_at} >{created_at}</h2>
            </div>
          </div>
        </div>
      ))}
      <div className={index_style.pager}>
        <Link href="/archive/[page]" as="/archive/2"><a className={index_style.next}>Prev →</a></Link>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const MAX_COUNT: number = 2
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData: allPostsData.slice(0, MAX_COUNT)
    }
  }
}