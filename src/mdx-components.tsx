import { type MDXComponents } from 'mdx/types'
import Blockquote from '../src/components/blockquote'
import { heading } from './styles/heading.css'
import { note } from './styles/note.css'
import { CodeContainer, CodeInner } from './components/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Blockquote,
    blockquote: Blockquote,
    h1: props => <h1 className={heading()} {...props} />,
    h2: props => <h2 className={heading()} {...props} />,
    h3: props => <h3 className={heading()} {...props} />,
    h4: props => <h4 className={heading()} {...props} />,
    h5: props => <h5 className={heading()} {...props} />,
    h6: props => <h6 className={heading()} {...props} />,
    Note: props => <p className={note()} {...props} />,
    pre: CodeContainer,
    code: CodeInner,
    inlineCode: 'h1',
  }
}
