import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export type Meta = {
  title: string;
  created_at: string;
  updated_at: string;
  thumbnail: string;
  tag: string;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fname => {
    const id = fname.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fname)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const metadata = matter(fileContents)

    return {
      id,
      ...(metadata.data as Meta)
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.created_at < b.created_at) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fname => {
    return {
      params: {
        id: fname.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const metadata = matter(fileContents)

  const postContent = await remark()
  .use(html)
  .process(metadata.content)
  const contentHtml = postContent.toString()

  return {
    id,
    contentHtml,
    ...(metadata.data as Meta)
  }
}
