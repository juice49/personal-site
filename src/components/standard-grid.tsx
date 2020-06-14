import styled from 'styled-components'

const StandardGrid = styled.div`
  display: grid;

  grid-template-areas:
    'gutter1 content gutter2'
    'gutter1 meta1 gutter2'
    'gutter1 meta2 gutter2';
  
  grid-template-columns:
    minmax(var(--space2), auto)
    minmax(0, 44ch)
    minmax(var(--space2), auto);

  --gutterAb: var(--space2);

  @media (max-width: calc(${props => props.theme.breakpoints[2]} - 1px)) {
    > * + * {
      margin-top: var(--space2);
    }
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-areas: 'gutter1 meta1 gutterA content gutterB meta2 gutter2';
    
    grid-template-columns:
      1fr
      minmax(auto, 15ch)
      var(--gutterAb)
      minmax(auto, 52ch)
      var(--gutterAb)
      minmax(auto, 15ch)
      1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    --gutterAb: var(--space4);
  }
`

export default StandardGrid

export const StandardGridContent = styled.div`
  grid-area: content;
`

export const StandardGridContentSlightlyWide = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-area: content;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-area: 1 / gutterA / 1 / gutterB;
  }
`

export const StandardGridContentWide = styled.div`
  grid-area: content;
  
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-area: 1 / meta1 / 1 / meta2;
  }
`

interface StandardGridMetaProps {
  position: 1 | 2
}

export const StandardGridMeta = styled.div<StandardGridMetaProps>`
  grid-area: ${(props: StandardGridMetaProps) => `meta${props.position}`};
  color: var(--body-color-subtle);
`

StandardGridMeta.defaultProps = {
  position: 1
}
