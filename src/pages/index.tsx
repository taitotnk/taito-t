import Head from 'next/head'
import {getSortedPostsData} from '../lib/posts'
import {GetStaticProps} from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}