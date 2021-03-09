import {getAllPostIds, getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import Head from 'next/head'
import postStyles from '../../styles/post-styles.module.css'
import Image from 'next/image'

export default function Post({postData}:{
    postData: {
        title: string;
        created_at: string;
        updated_at: string;
        tag: string;
        thumbnail: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name="og:title" content={postData.title} />
                <meta property="og:image" content={postData.thumbnail} />
            </Head>
        <div className={postStyles.center}>
        <Image src={postData.thumbnail} height={300} width={600}/>
        </div>
        <article>
        <h1 className={postStyles.center}>{postData.title}</h1>
        <small className={postStyles.center}>投稿日:{postData.created_at} 更新日:{postData.updated_at}</small>
        <div className={postStyles.article} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}