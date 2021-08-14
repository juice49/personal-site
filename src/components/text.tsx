import styled from 'styled-components'
import variants from '../lib/variants'
import withHeading from '../lib/with-heading'

interface Props {
  size?: 'micro' | 'milli'
  weight?: 'bold'
  variant?: 'mono'
}

const Text = styled.span<Props>`
  ${variants(
    {
      micro: `
      font-size: 0.6rem;
    `,
      milli: `
      font-size: 0.8rem;
    `,
    },
    'size',
  )}

  ${variants(
    {
      bold: `
      font-variation-settings: 'wght' 680;
    `,
    },
    'weight',
  )}

  ${variants({
    mono: `
      font-family: 'JetBrains Mono', SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    `,
  })}
`

export default Text

export const TextHeading = withHeading<Props>(Text)
