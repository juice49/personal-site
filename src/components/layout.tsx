import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { documentOuter, documentInner } from '../styles/document-container.css'
import '../components/global-style.css'
import { stack, stackBlockGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

interface Props {
  as?: string | React.ComponentType<any>
  isLogoH1?: boolean
}

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  isLogoH1,
  ...props
}) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/zangezi-sans-0.9/ZangeziSans09-Black.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <div className={documentOuter()}>
        <div
          className={[documentInner(), stack({ block: true })].join(' ')}
          style={{
            [stackBlockGapVar]: vars.space.page,
          }}
        >
          <Header isLogoH1={isLogoH1} />
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space.page,
            }}
            {...props}
          >
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
