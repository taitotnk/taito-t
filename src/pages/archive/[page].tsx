import Layout from "../../components/layout"
import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from 'next'
import {getSortedPostsData, getAllPostIds} from '../../lib/posts'
import Image from "next/image"
import Link from "next/link"
import index_style from "../../styles/index.module.css"
import Pager from "../../components/pager"

const COUNT_PER_PAGE: number = 2

type PostsData = {
    id: string;
    title: string;
    created_at: string;
    updated_at: string;
    thumbnail: string;
    tag: string;
  }[]

type props = {
    postData: PostsData;
    page: number;
    total: number;
    perPage: number;
}

export default function Archive(props: props) {
    const {postData, page, total, perPage} = props
    return (
        <Layout>
            <Head>
                <title>Archive{page}</title>
            </Head>
            {postData.map(({ id, title, created_at, thumbnail, tag }) => (
            <div className={index_style.post_list}>
            <div className="max-w-lg rounded overflow-hidden shadow-md my-2" >
            <Image className="w-full" src={thumbnail}  height={300} width={600} alt="thumbnail" key={thumbnail} />
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
            <Pager page={page} total={total} perPage={perPage} href="/archive/[page]" asCallback={(page: number) => `/archive/${page}`}/>
        </Layout>
    )

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = getSortedPostsData()
    const page = parseInt(params.page as string, 10)
    const end = COUNT_PER_PAGE * page
    const start = end - COUNT_PER_PAGE

    return {
        props: {
            postData: postData.slice(start, end),
            total: postData.length,
            page,
            perPage: COUNT_PER_PAGE,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPostIds()
    const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
    const paths = pages.map((page) => ({
        params: {page: `${page}`}
    }))

    return {
        paths: paths,
        fallback: false
    }
}

function range(stop: number) {
    return Array.from({ length: stop }, (_, i) => i + 1)
}