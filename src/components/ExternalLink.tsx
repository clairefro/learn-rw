import React, { FC } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string
  blank?: boolean
  noRefferer?: boolean
  noOpener?: boolean
  noFollow?: boolean
  className?: string
}

export const ExternalLink: FC<Props> = props => {
  const {
    href,
    blank = true,
    noRefferer = true,
    noOpener = true,
    noFollow = false,
    className,
    children,
    ...rest
  } = props
  const target = blank ? "_blank" : "_self"
  const rel = `${noRefferer ? "noreferrer" : ""} ${
    noOpener ? "noopener" : ""
  } ${noFollow ? "nofollow" : ""}`
  return (
    <a
      {...rest}
      href={href}
      className={className ? className : ""}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  )
}
