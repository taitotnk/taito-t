import {getAllPostIds, getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'

export default function Post({postData}:{
    postData: {
        title: string;
        created_at: string;
        updated_at: string;
        tag: string;
        contentHtml: string
    }
}) {
    return (
        <Layout>
        <article>
        <h1>{postData.tag}</h1>
        <h1>{postData.title}</h1>
        <div>
          {postData.created_at}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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