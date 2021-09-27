import Link from "next/link"
import style from "../styles/pager.module.scss"

type props = {
  page: number;
  total: number;
  perPage: number;
  href: string;
  asCallback: any;
}

const Pager = (props: props) => {
  const { page, total, perPage, href, asCallback } = props

  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1
  }

  return (
    <div className={style.pager}>
      <span className={style.prev}>
        {prevPage ? (
          <Link href={href} as={asCallback(prevPage)}>
            <a>← Next</a>
          </Link>
        ) : ''}
      </span>
      <span className={style.next}>
        {nextPage ? (
          <Link href={href} as={asCallback(nextPage)}>
            <a>Preb →</a>
          </Link>
        ) : ''}
      </span>
      </div>
  )
}

export default Pager