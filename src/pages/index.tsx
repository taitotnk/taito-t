import Head from 'next/head'
import {getSortedPostsData} from '../lib/posts'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import index_style from '../styles/index.module.css'
import {siteTitle} from '../components/layout'


export default function Home( {allPostsData}: {
  allPostsData : {
    id: string
    countFile: number
    title: string;
    created_at: string;
    updated_at: string;
    thumbnail: string;
    tag: string;
  }[]
}) {

  // postの投稿数取得
  let count = 0
  allPostsData.map(({countFile}) => count = countFile)


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/taitologo.jpg" />
      </Head>
          <h1 className={index_style.name}>I am Taito</h1>
          <div className={index_style.icon_cont}>
          <a href="https://github.com/Taito-Code" target="_blank"><Image className={index_style.icon} src='/github-icon.png' height={70} width={70}/></a>
          <a href="https://twitter.com/taito_1211" target="_blank"><Image className={index_style.icon} src='/twitter-icon.png' height={70} width={70}/></a>
          <a href="https://www.instagram.com/taito_tanaka" target="_blank"><Image className={index_style.icon} src='/instagram-icon.png' height={70} width={70}/></a>
          </div>
          {allPostsData.map(({ id, title, created_at, updated_at ,thumbnail, tag }) => (
            <Link href={`/posts/${id}`}>
            <div className={index_style.post_list}>
            <div className="max-w-lg rounded overflow-hidden shadow-md my-2">
            <Image className="w-full" src={thumbnail}  height={300} width={600}/>
            <div className="px-6 py-4">
            <div className={index_style.title}>
            <a><div className="font-bold text-xl mb-2"><h2>{title}</h2></div></a>
            </div>
            </div>
            <div className="px-0 py-0">
            <div className={index_style.tag}><span className="inline-block bg-grey-lighter rounded-full px-0 py-0 text-sm font-semibold text-grey-darker mr-0"><h1>#{tag}</h1></span></div>
            <h3 className={index_style.date}>{created_at}</h3>
            </div>
            </div>
            </div>
            </Link>
          ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}