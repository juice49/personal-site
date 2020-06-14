import React from 'react'
import Link, { LinkProps } from 'next/link'
import Stack from './stack'
import Box from './box'
import Text from './text'

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

      ${props => props.columns && `
        display: grid;
        grid-gap: var(--space2);
        grid-template-columns: 1fr 1fr;
      `}

      ${props => !props.columns && `
        > * + * {
          ${border}
        }
      `}

      ${props => props.columns && `
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
  heading?: string,
  description?: string,
  link?: LinkProps,
  externalUrl?: string
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  heading,
  description,
  link,
  externalUrl
}) => {
  let BlockLink: React.FC<LinkProps> = props => <React.Fragment {...props} />

  if (link) {
    BlockLink = ({ children, ...props }) => (
      <Link {...props} passHref>
        <ArticleLink>
          {children}
        </ArticleLink>
      </Link>
    )
  }

  if (externalUrl) {
    BlockLink = ({ children }) => (
      <ArticleLink href={externalUrl} target='_blank' rel='noopener'>
        {children}
      </ArticleLink>
    )
  }

  return (
    <Box as='li' px={1}>
      <BlockLink {...link}>
        <Stack gap={0}>
          {heading && (
            <Text
              as='h4'
              size='milli'
              weight='bold'
              css={`
                color: var(--color);
              `}
            >
              <Stack as='span' direction='inline' gap={1}>
                <span>
                  {heading}
                </span>
                {externalUrl && (
                  <ExternalLinkIcon />
                )}
              </Stack>
            </Text>
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
        </Stack>
      </BlockLink>
    </Box>
  )
}

const ArticleLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(({
  children,
  ...props
}, ref) => (
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

const ExternalLinkIcon: React.FC = () => (
  <svg
    css={`
      width: 0.5rem;
      height: auto;
    `}
    viewBox='0 0 100 125'
  >
    <g>
      <path
        d='M43.504873,50.1095203 L50.1280214,56.7326687 L85.8383992,21.0222909 L85.7595646,41.8934967 L95.1065227,41.8594751 L95.2389973,4.99873068 L58.37828,5.13120516 L58.3440188,14.4779772 L79.2152508,14.3991425 L43.504873,50.1095203 Z M49.8975943,15.95863 L49.8973417,27.24963 L16.2021549,27.2502543 L16.2021549,83.7083757 L72.3612207,83.7083757 L72.3603417,49.83263 L83.5930338,49.8335028 L83.5930338,95 L4.9703417,95 L4.9703417,15.95863 L49.8975943,15.95863 Z'
        css={`
          fill: currentColor;
        `}
      />
    </g>
  </svg>
)
