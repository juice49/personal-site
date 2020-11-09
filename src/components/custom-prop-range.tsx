import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { useGenerateCustomPropRange, CustomPropRangeDefinition } from 'monstera'

interface Props {
  name: string
  values: CustomPropRangeDefinition[]
}

const CustomPropRange: React.FC<Props> = ({ name, values }) => {
  const css = useGenerateCustomPropRange(name, values)

  const Styles = createGlobalStyle`
    :root {
      ${css}
    }
  `

  return <Styles />
}

export default CustomPropRange
