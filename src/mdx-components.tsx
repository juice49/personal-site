import InlineCode from './components/inline-code'
import Heading from './components/heading'
import Blockquote from './components/blockquote'

const MDXComponents = {
  pre: ({ children }) => children,
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
  Blockquote: Blockquote,
}

export default MDXComponents
