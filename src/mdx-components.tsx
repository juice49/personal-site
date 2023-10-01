import InlineCode from './components/inline-code'
import { heading } from './styles/heading.css'
import Blockquote from './components/blockquote'

const MDXComponents = {
  pre: ({ children }) => children,
  inlineCode: InlineCode,
  h1: function H1(props) {
    return <h1 className={heading()} {...props} />
  },
  h2: function H2(props) {
    return <h2 className={heading()} {...props} />
  },
  h3: function H3(props) {
    return <h3 className={heading()} {...props} />
  },
  h4: function H4(props) {
    return <h4 className={heading()} {...props} />
  },
  h5: function H5(props) {
    return <h5 className={heading()} {...props} />
  },
  h6: function H6(props) {
    return <h6 className={heading()} {...props} />
  },
  Blockquote: Blockquote,
}

export default MDXComponents
