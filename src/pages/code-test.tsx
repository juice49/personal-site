import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/layout'
import StandardGrid, { StandardGridContent } from '../components/standard-grid'
import Stack from '../components/stack'
import Box from '../components/box'
import Code from '../components/code'
import getCodeBlockStaticProps from '../lib/code'

const Page: NextPage = props => (
  <Layout>
    <Box pb={[15, 'vmin']}>
      <StandardGrid>
        <StandardGridContent>
          <Stack gap={2}>
            <Code language='tsx' code={`interface Foo {
  bar?: string,
  bat: number
}

<style>
  .foo {
    background-color: red;
  }
</style>

const OwlGrid = styled.div\`
  display: grid;
  grid-column-gap: calc(var(--x) * var(--scale, 1));
  grid-row-gap: calc(var(--y) * var(--scale, 1));
\`

// Example usage:
const App = () => (
  <OwlGrid>
    <p>Sapien lorem condimentum amet sollicitudin, sapien, malesuada risus sed est dolor vestibulum sed sapien. Ut euismod vivamus sit ipsum nunc amet ipsum nibh condimentum. Vestibulum malesuada, elit in quis elit est ipsum risus tortor.</p>
    <p>Adipiscing aenean dolor nibh sollicitudin condimentum amet ut sodales sed ut amet.Elit sapien lorem condimentum ipsum ante porttitor nibh. Vivamus consectetur amet elit ipsum sollicitudin consectetur. Amet ipsum quis risus nunc vivamus sollicitudin ipsum risus. Lorem euismod sollicitudin tortor in lorem orci malesuada risus ipsum.</p>
  </OwlGrid>
)`} />
            <Code language='ts' code={`const foo = () => 'codeblock2'`} />
          </Stack>
        </StandardGridContent>
      </StandardGrid>
    </Box>
  </Layout>
)

export default Page

export async function getStaticProps () {
  const props = await getCodeBlockStaticProps(Page)
  return { props }
}
