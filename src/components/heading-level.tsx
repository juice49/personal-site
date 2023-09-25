import React, { cloneElement } from 'react'
// import { useLevel } from 'react-accessible-headings'

interface PolymorphicComponentProps {
  as: string | React.ComponentType
}

// FIXME-APP-DIR
function useLevel() {
  return 1
}

interface Props {
  children: React.ReactElement<PolymorphicComponentProps>
}

const HeadingLevel: React.FC<Props> = ({ children }) =>
  cloneElement(children, {
    as: `h${useLevel()}`,
  })

export default HeadingLevel
