const visit = require('unist-util-visit')

module.exports = function () {
  return function (tree) {
    tree.children.splice(0, 0, {
      type: 'import',
      value: `import Stack from '../../components/stack'`,
    })

    const sectionIndexes = new Set()

    tree.children.forEach((node, index) => {
      if (sectionIndexes.size !== 0) {
        return
      }

      if (['import', 'export'].includes(node.type)) {
        return
      }

      sectionIndexes.add(index)
    })

    visit(tree, 'heading', (node, index) => {
      sectionIndexes.add(index)
    })

    tree.children = [...sectionIndexes].reduce(
      (children, sectionIndex, index) => {
        const nextSectionIndex = [...sectionIndexes][index + 1]

        return [
          ...children,
          {
            type: 'jsx',
            value: '<Stack>',
          },
          ...tree.children.slice(sectionIndex, nextSectionIndex),
          {
            type: 'jsx',
            value: '</Stack>',
          },
        ]
      },
      tree.children.slice(0, [...sectionIndexes][0]),
    )
  }
}
