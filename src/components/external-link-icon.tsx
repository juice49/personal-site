import React from 'react'
import { styled } from '../stitches.config'

const ExternalLinkIcon: React.FC = () => (
  <Container viewBox='0 0 100 125'>
    <g>
      <Path d='M43.504873,50.1095203 L50.1280214,56.7326687 L85.8383992,21.0222909 L85.7595646,41.8934967 L95.1065227,41.8594751 L95.2389973,4.99873068 L58.37828,5.13120516 L58.3440188,14.4779772 L79.2152508,14.3991425 L43.504873,50.1095203 Z M49.8975943,15.95863 L49.8973417,27.24963 L16.2021549,27.2502543 L16.2021549,83.7083757 L72.3612207,83.7083757 L72.3603417,49.83263 L83.5930338,49.8335028 L83.5930338,95 L4.9703417,95 L4.9703417,15.95863 L49.8975943,15.95863 Z' />
    </g>
  </Container>
)

export default ExternalLinkIcon

const Container = styled('svg', {
  width: '0.5rem',
  height: 'auto',
})

const Path = styled('path', {
  fill: 'currentColor',
})
