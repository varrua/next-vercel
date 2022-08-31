import { useRouter } from 'next/router'
import React, { CSSProperties, FC } from 'react'
import Link from 'next/link'

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface props {
  text: string;
  href: string;
}

 const ActiveLink: FC<props> = (props:props) => {

  const { asPath } = useRouter();

  return (
    <Link href={props.href || ''}>
        <a style={asPath === props.href ? style : undefined}>{props.text}</a>
    </Link>
  )
}

export default ActiveLink
