import React, { FC, PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { CSS } from '@stitches/react'
import { styled, config } from '../stitches.config'
import Box from './box'
import Text from './text'
import ExternalLinkIcon from './external-link-icon'
import HeadingLevel from './heading-level'

const border: CSS<typeof config> = {
  borderBlockStart: '1px dashed $bodySubtle',
  marginBlockStart: 'calc($2 * 0.5)',
  paddingBlockStart: 'calc($2 * 0.5)',
}

const Container = styled('ul', {
  listStyle: 'circle',
  marginInlineStart: '$2',
  variants: {
    columns: {
      true: {
        display: 'grid',
        gap: '$2',
        gridTemplateColumns: '1fr 1fr',
        '& > *': border,
      },
      false: {
        '& > * + *': border,
      },
    },
  },
  defaultVariants: {
    columns: false,
  },
})

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
  let BlockLink: FC<PropsWithChildren<LinkProps>> = props => (
    <React.Fragment {...props} />
  )

  if (link) {
    BlockLink = function BlockLink({ children, ...props }) {
      return (
        <Link {...props} passHref>
          <ArticleLink>{children}</ArticleLink>
        </Link>
      )
    }
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
    <Box
      as='li'
      css={{
        paddingInline: '$small',
      }}
    >
      <BlockLink {...link}>
        <Box
          css={{
            stackBlock: '$small',
          }}
        >
          <Box
            css={{
              stackBlock: headingGap ? '$small' : undefined,
            }}
          >
            {heading && (
              <HeadingLevel>
                <Text
                  size='milli'
                  weight='bold'
                  css={{
                    color: 'var(--color)',
                  }}
                >
                  <Box
                    as='span'
                    css={{
                      stackInline: '$small',
                    }}
                  >
                    <span>{heading}</span>
                    {externalUrl && <ExternalLinkIcon />}
                  </Box>
                </Text>
              </HeadingLevel>
            )}
            {description && (
              <Text
                as='p'
                size='micro'
                variant='mono'
                css={{
                  color: 'var(--color, $bodySubtle)',
                }}
              >
                {description}
              </Text>
            )}
          </Box>
          {children}
        </Box>
      </BlockLink>
    </Box>
  )
}

const ArticleLinkOuter = styled('a', {
  display: 'block',
  position: 'relative',
  '&:hover': {
    '--color': '#fff',
  },
  '&:hover:before': {
    position: 'absolute',
    zIndex: 0,
    inset: '0 calc($1 * -1) calc($1 * -1) 0',
    backgroundColor: '$accentA',
    transform: 'skew(0.7deg, 0.7deg)',
    content: '',
  },
})

const ArticleLinkInner = styled('div', {
  position: 'relative',
})

const ArticleLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
  <ArticleLinkOuter ref={ref} {...props}>
    <ArticleLinkInner>{children}</ArticleLinkInner>
  </ArticleLinkOuter>
))

ArticleLink.displayName = 'ArticleLink'
