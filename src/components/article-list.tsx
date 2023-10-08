import React, {
  type FC,
  type ComponentType,
  type ComponentProps,
  type PropsWithChildren,
} from 'react'

import Link, { type LinkProps } from 'next/link'
import { RecipeVariants } from '@vanilla-extract/recipes'
import text from '../styles/text.css'
import ExternalLinkIcon from './external-link-icon'
import HeadingLevel from './heading-level'
import { stack, stackBlockGapVar, stackInlineGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

import {
  articleLinkInner,
  articleLinkOuter,
  container,
} from '../styles/article-list.css'

type Props = PropsWithChildren<RecipeVariants<typeof container>>

const Container: ComponentType<Props> = ({ columns, ...props }) => (
  <ul className={container({ columns })} {...props} />
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
  let BlockLink: ComponentType<PropsWithChildren> = props => (
    <React.Fragment {...props} />
  )

  if (link) {
    BlockLink = props => <ArticleLink {...props} {...link} />
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
      <BlockLink>
        <div
          className={stack({ block: true })}
          style={{
            [stackBlockGapVar]: vars.space.small,
          }}
        >
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: headingGap ? vars.space.small : undefined,
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
                    className={stack({ inline: true })}
                    style={{
                      [stackInlineGapVar]: vars.space.small,
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
