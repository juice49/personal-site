import Code from './components/code'
import InlineCode from './components/inline-code'
import Box from './components/box'
import Heading from './components/heading'
import ContentImage from './components/content-image'
import Blockquote from './components/blockquote'

const MDXComponents = {
  pre: ({ children }) => children,
  code: function CodeComponent({ className, children }) {
    return (
      <Box mx={-2}>
        <Code code={children} language={className.replace(/language-/, '')} />
      </Box>
    )
  },
  inlineCode: InlineCode,
  h1: function H1(props) {
    return <Heading as='h1' {...props} />
  },
  h2: function H2(props) {
    return <Heading as='h2' {...props} />
  },
  h3: function H3(props) {
    return <Heading as='h3' {...props} />
  },
  h4: function H4(props) {
    return <Heading as='h4' {...props} />
  },
  h5: function H5(props) {
    return <Heading as='h5' {...props} />
  },
  h6: function H6(props) {
    return <Heading as='h6' {...props} />
  },
  image: ContentImage,
  blockquote: Blockquote,
}

export default MDXComponents
