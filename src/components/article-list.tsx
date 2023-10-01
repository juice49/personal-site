import React, {
  type FC,
  type ComponentType,
  type ComponentProps,
  type PropsWithChildren,
} from 'react'

import Link, { type LinkProps } from 'next/link'
import text from '../styles/text.css'
import ExternalLinkIcon from './external-link-icon'
import HeadingLevel from './heading-level'

import {
  articleLinkInner,
  articleLinkOuter,
  container,
} from '../styles/article-list.css'

const Container: ComponentType = props => (
  <ul className={container()} {...props} />
)

export default Container

interface ArticleListItemProps {
  heading?: string
  headingGap?: boolean
  description?: string
  link?: LinkProps
  externalUrl?: string
}

export const ArticleListItem: FC<PropsWithChildren<ArticleListItemProps>> = ({
  children,
  heading,
  headingGap = true,
  description,
  link,
  externalUrl,
}) => {
  let BlockLink: ComponentType<ComponentProps<typeof Link>> = props => (
    <React.Fragment {...props} />
  )

  if (link) {
    BlockLink = ArticleLink
  }

  if (externalUrl) {
    BlockLink = function BlockLink({ children }) {
      return (
        <ArticleLink href={externalUrl} target='_blank' rel='noopener'>
          {children}
        </ArticleLink>
      )
    }
  }

  return (
    <li
      style={{
        paddingInline: '$small',
      }}
    >
      <BlockLink {...link}>
        <div
          style={{
            stackBlock: '$small',
          }}
        >
          <div
            style={{
              stackBlock: headingGap ? '$small' : undefined,
            }}
          >
            {heading && (
              <HeadingLevel>
                <span
                  className={text({
                    size: 'milli',
                    weight: 'bold',
                  })}
                  style={{
                    color: 'var(--color)',
                  }}
                >
                  <span
                    style={{
                      stackInline: '$small',
                    }}
                  >
                    <span>{heading}</span>
                    {externalUrl && <ExternalLinkIcon />}
                  </span>
                </span>
              </HeadingLevel>
            )}
            {description && (
              <p
                className={text({ size: 'micro', variant: 'mono' })}
                style={{
                  color: 'var(--color, $bodySubtle)',
                }}
              >
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </BlockLink>
    </li>
  )
}

const ArticleLink: ComponentType<ComponentProps<typeof Link>> = ({
  children,
  ...props
}) => (
  <Link {...props} className={articleLinkOuter()}>
    <div className={articleLinkInner()}>{children}</div>
  </Link>
)
