import { styled } from '../stitches.config'
import Text from './text'

const Note = styled(Text, {
  color: '$bodySubtle',
  defaultVariants: {
    size: 'micro',
    variant: 'mono',
  },
})

export default Note
