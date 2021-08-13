import React from 'react'
import Link, { LinkProps } from 'next/link'
import Stack from './stack'
import Box from './box'
import Text, { TextHeading } from './text'
import ExternalLinkIcon from './external-link-icon'

interface Props {
  columns?: boolean
}

const border = `
  border-top: 1px dashed var(--body-color-subtle);
  margin-top: calc(var(--space2) * 0.5);
  padding-top: calc(var(--space2) * 0.5);
`

const ArticleList: React.FC<Props> = ({ children, columns }) => (
  <Stack
    as='ul'
    gap={0}
    columns={columns}
    css={`
      list-style: circle;
      margin-left: var(--space2);

      ${props =>
        props.columns &&
        `
        display: grid;
        grid-gap: var(--space2);
        grid-template-columns: 1fr 1fr;
      `}

      ${props =>
        !props.columns &&
        `
        > * + * {
          ${border}
        }
      `}

      ${props =>
        props.columns &&
        `
        > * {
          ${border}
        }
      `}
    `}
  >
    {children}
  </Stack>
)

export default ArticleList

interface ArticleListItemProps {
  heading?: string
  description?: string
  link?: LinkProps
  externalUrl?: string
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  children,
  heading,
  description,
  link,
  externalUrl,
}) => {
  let BlockLink: React.FC<LinkProps> = props => <React.Fragment {...props} />

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
    <Box as='li' px={1}>
      <BlockLink {...link}>
        <Stack gap={1}>
          {heading && (
            <TextHeading
              size='milli'
              weight='bold'
              css={`
                color: var(--color);
              `}
            >
              <Stack as='span' direction='inline' gap={1}>
                <span>{heading}</span>
                {externalUrl && <ExternalLinkIcon />}
              </Stack>
            </TextHeading>
          )}
          {description && (
            <Text
              as='p'
              size='micro'
              variant='mono'
              css={`
                color: var(--color, var(--body-color-subtle));
              `}
            >
              {description}
            </Text>
          )}
          {children}
        </Stack>
      </BlockLink>
    </Box>
  )
}

const ArticleLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
  <a
    ref={ref}
    {...props}
    css={`
      display: block;
      position: relative;

      &:hover {
        --color: #fff;
      }

      &:hover:before {
        position: absolute;
        z-index: 0;
        top: 0;
        right: calc(var(--space1) * -1);
        bottom: calc(var(--space1) * -1);
        left: 0;
        background-color: var(--accent-color);
        transform: skew(0.7deg, 0.7deg);
        content: '';
      }
    `}
  >
    <div
      css={`
        position: relative;
      `}
    >
      {children}
    </div>
  </a>
))

ArticleLink.displayName = 'ArticleLink'
