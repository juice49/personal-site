import styled from 'styled-components'
import Text from './text'

const Note = styled(Text).attrs(() => ({
  size: 'micro',
  variant: 'mono'
}))`
  color: var(--body-color-subtle);
`

export default Note
