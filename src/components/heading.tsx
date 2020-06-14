import styled from 'styled-components'
import variants from '../lib/variants'

type Variant = 'alpha'

interface Props {
  variant?: Variant
}

const Heading = styled.h1<Props>`
  font-size: 1.4rem;
  font-family: 'Zangezi Sans';
  line-height: 1.2;
  color: var(--accent-color);

  ${variants({
    alpha: `
      font-size: 2.2rem;
      font-size: clamp(2.6rem, 7.2vw, 5.6rem);
      line-height: 1.08;
      text-align: center;
    `
  })}
`

export default Heading
