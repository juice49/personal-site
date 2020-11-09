import styled from 'styled-components'
import { stack, StackProps } from 'monstera'

const Stack = styled.div<StackProps>`
  ${stack}
`

Stack.defaultProps = {
  gap: 2,
  direction: 'block',
}

export default Stack
