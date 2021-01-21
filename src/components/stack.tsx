import styled from 'styled-components'
import { stack, StackProps } from 'monstera'

const Stack = styled.div.withConfig({ shouldForwardProp })<StackProps>`
  ${stack}
`

Stack.defaultProps = {
  gap: 2,
  direction: 'block',
}

export default Stack

function shouldForwardProp(
  prop: string,
  defaultValidatorFn: (prop: string) => boolean,
): boolean {
  return !['direction'].includes(prop) && defaultValidatorFn(prop)
}
