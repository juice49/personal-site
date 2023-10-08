export default () => <h1>todo</h1>

// import { NextPage, GetServerSideProps } from 'next'
// import Head from 'next/head'
// import { format } from 'date-fns'
// import '../../components/global-style.css'
// import { themeClass } from '../../theme.css'
// import text from '../../styles/text.css'
// import { heading } from '../../styles/heading.css'

// // FIXME
// // const customGlobalStyle = globalCss({
// //   ':root': {
// //     [theme.space.documentBorderWidth.variable]: 0,
// //   },
// // })

// interface Props {
//   title: string
//   date?: string
// }

// const Page: NextPage<Props> = ({ title, date }) => {
//   return (
//     <DocumentOuter>
//       <Head>
//         <meta name='robots' content='noindex' />
//         <style
//           type='text/css'
//           dangerouslySetInnerHTML={{
//             __html: `
//             @font-face {
//               font-family: 'PT Root UI';
//               font-display: swap;
//               src: url('/fonts/pt-root-ui-vf/fonts/pt-root-ui-vf.woff2') format('woff2');
//             }

//             @font-face {
//               font-family: 'Zangezi Sans';
//               font-weight: 700;
//               font-display: swap;
//               src: url('/fonts/zangezi-sans-0.9/ZangeziSans09-Black.woff2') format('woff2');
//             }

//             @font-face {
//               font-family: 'JetBrains Mono';
//               font-display: swap;
//               src: url('/fonts/JetBrainsMono-1.0.3/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
//             }
//           `,
//           }}
//         />
//       </Head>
//       <Container className={themeClass}>
//         <div
//           style={{
//             padding: '$2',
//             paddingBlockEnd: 0,
//           }}
//         >
//           <LogoContainer>
//             <LogoImage
//               src='http://gravatar.com/avatar/baa7a8ec68ea6c13a1f0691098872575?s=200'
//               alt='Photo of me'
//               width={34}
//               height={34}
//             />
//             <h2 className={text({ weight: 'bold', size: 'milli' })}>Ash</h2>
//           </LogoContainer>
//         </div>
//         <div
//           style={{
//             paddingInline: '$2',
//           }}
//         >
//           <h1
//             className={heading()}
//             dangerouslySetInnerHTML={{
//               __html: title,
//             }}
//           />
//           {date && (
//             <time
//               className={text({ variant: 'mono', size: 'micro' })}
//               dateTime={date}
//             >
//               {format(new Date(date), 'd MMMM yyyy')}
//             </time>
//           )}
//         </div>
//         <Footer>
//           <div
//             style={{
//               paddingInline: '$2',
//               paddingBlock: '$1',
//             }}
//           >
//             <span className={text({ size: 'micro' })}>@juice49</span>
//           </div>
//           <div
//             style={{
//               paddingInline: '$2',
//               paddingBlock: '$1',
//             }}
//           >
//             <span className={text({ size: 'micro' })}>https://ash.gd</span>
//           </div>
//         </Footer>
//       </Container>
//     </DocumentOuter>
//   )
// }

// export default Page

// // FIXME
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const props: Props = {
//     title: [].concat(query.title)[0],
//   }

//   if (query.date) {
//     props.date = [].concat(query.date)[0]
//   }

//   return { props }
// }

// export const config = {
//   unstable_runtimeJS: false,
// }

// // FIXME
// const DocumentOuter = 'div'
// // const DocumentOuter = styled('div', {
// //   display: 'flex',
// //   minHeight: '100vh',
// //   backgroundColor: '$background',
// // })

// // FIXME
// const Container = 'div'
// // const Container = styled('div', {
// //   display: 'grid',
// //   width: '100%',
// //   zoom: 1.75,
// //   gridTemplateRows: 'auto 1fr auto',
// //   alignItems: 'center',
// // })

// // FIXME
// const Footer = 'footer'
// // const Footer = styled('footer', {
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   backgroundColor: '#fff',
// //   color: '$bodySubtle',
// // })

// // FIXME
// const LogoContainer = 'div'
// // const LogoContainer = styled('div', {
// //   display: 'flex',
// //   gap: '$1',
// //   alignItems: 'center',
// // })

// // FIXME
// const LogoImage = 'img'
// // const LogoImage = styled('img', {
// //   display: 'block',
// //   borderRadius: '50%',
// // })
