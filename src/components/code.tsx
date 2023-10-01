import React, { FC, PropsWithChildren } from 'react'
import { container } from '../styles/code.css'

const Code: FC<PropsWithChildren> = ({ children }) => (
  <pre className={container()} tabIndex={0}>
    <code>{children}</code>
  </pre>
)

export default Code
