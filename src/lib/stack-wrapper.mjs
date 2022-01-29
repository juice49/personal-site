import { visit } from 'unist-util-visit'
import { u } from 'unist-builder'
import { parse } from 'acorn'

export default function () {
  return function (tree) {
    tree.children.splice(0, 0, {
      type: 'mdxjsEsm',
      data: {
        estree: parse(`import Box from '../../components/box'`, {
          sourceType: 'module',
        }),
      },
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
            type: 'mdxJsxFlowElement',
            name: 'Box',
            children: tree.children.slice(sectionIndex, nextSectionIndex),
            attributes: [
              u('mdxJsxAttribute', {
                name: 'css',
                value: u('mdxJsxAttributeValueExpression', {
                  data: {
                    estree: {
                      type: 'Program',
                      sourceType: 'module',
                      comments: [],
                      body: [
                        {
                          type: 'ExpressionStatement',
                          expression: u('ObjectExpression', {
                            properties: [
                              u('Property', {
                                key: u('Identifier', {
                                  name: 'stackBlock',
                                }),
                                value: u('Literal', {
                                  value: '$medium',
                                }),
                                kind: 'init',
                              }),
                            ],
                          }),
                        },
                      ],
                    },
                  },
                }),
              }),
            ],
          },
        ]
      },
      tree.children.slice(0, [...sectionIndexes][0]),
    )
  }
}
