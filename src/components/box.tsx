import styled from 'styled-components'
import { space } from 'monstera'

// TODO: Add Monstera props.
interface Props {
  mw: number,
  center?: boolean
}

// TODO: Move max width handling to Monstera.
const mw = ['44ch', '75rem']

const Box = styled.div<Props>`
  ${space}

  ${props => typeof mw[props.mw] !== 'undefined' && `
    max-width: ${mw[props.mw]};
  `}

  ${props => props.center && `
    margin-left: auto;
    margin-right: auto;
  `}
`

export default Box
