import React from 'react'
import { useLevel } from 'react-accessible-headings'
import styled from 'styled-components'

interface PolymorphicComponent {
  as?: string | React.ComponentType<any>
}

export default function withHeading<Props>(
  Component: React.ComponentType<Props & PolymorphicComponent>,
): React.ComponentType<Props & PolymorphicComponent> {
  return styled(Component).attrs(props => ({
    as: `h${useLevel()}`,
    ...props,
  }))``
}
