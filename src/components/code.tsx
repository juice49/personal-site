import { type ComponentType, type PropsWithChildren } from 'react'
import { pre, code } from '../styles/code.css'

const Code: ComponentType<PropsWithChildren> = ({ children }) => (
  <CodeContainer>
    <CodeInner>{children}</CodeInner>
  </CodeContainer>
)

export default Code

export const CodeContainer: ComponentType<PropsWithChildren> = props => (
  <pre className={pre()} tabIndex={0} {...props} />
)

export const CodeInner: ComponentType<PropsWithChildren> = props => (
  <code className={code()} {...props} />
)
