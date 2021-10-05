import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Feed from '@json-feed-types/1_1'
import { MDXProvider } from '@mdx-js/react'
import * as postApi from '../lib/post-api'
import Providers from '../components/providers'
import NextPlainImage from '../components/next-plain-image'
import MDXComponents from '../mdx-components'
;(async () => {
  const posts = await postApi.getAll()

  const feed: Feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Ash',
    home_page_url: 'https://ash.gd',
    feed_url: 'https://ash.gd/feed',
    language: 'en-GB',
    authors: [
      {
        name: 'Ash',
        url: 'https://ash.gd',
        avatar:
          'https://gravatar.com/avatar/baa7a8ec68ea6c13a1f0691098872575?s=200',
      },
    ],
    items: posts.map(post => ({
      id: post.meta.slug,
      url: `https://ash.gd/posts/${post.meta.slug}`,
      title: post.meta.title,
      summary: post.meta.description,
      date_published: post.meta.date,
      tags: post.meta.tags,
      content_html: ReactDOMServer.renderToStaticMarkup(
        <Providers>
          <MDXProvider
            components={{
              ...MDXComponents,
              image: NextPlainImage,
              code: Code,
            }}
          >
            <post.source />
          </MDXProvider>
        </Providers>,
      ),
    })),
  }

  process.stdout.write(JSON.stringify(feed, null, 2) + '\n')
})()

const Code: React.FC = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
)
