import styled from 'styled-components'
import variants from '../lib/variants'

type Variant = 'large'

interface Props {
  variant?: Variant
}

const Button = styled.button<Props>`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-family: Zangezi Sans;

  &:hover,
  &:focus {
    color: #f8ce03;
  }

  ${variants({
    large: `
      width: 100%;
      padding: var(--space2);
      font-size: 1.3rem;
    `,
  })}
`

export default Button
