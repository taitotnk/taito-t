import Link from 'next/link';

const Home = ({blogs}) => {
  return (
    <div>
      <h2>最新の記事</h2>
      <div>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
              <a>
                <h2>{blog.title}</h2>
              </a>
            </Link>
            {blog.tags.map(tag => (
              <li key={tag.id}>
                <span>{tag.name}</span>
              </li>
            ))}
          </li>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const res = await fetch(
    `https://taito.microcms.io/api/v1/blogs/`,
    key,
  );
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    }
  }
};

export default Home;