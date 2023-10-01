import { createThemeContract, style, assignVars } from '@vanilla-extract/css'

const inlineBreakpoints = ['30em', '45em']

export const vars = createThemeContract({
  colors: {
    body: null,
    bodySubtle: null,
    background: null,
    documentBorder: null,
    accentA: null,
    accentB: null,
    accentC: null,
  },
  fonts: {
    body: null,
  },
  space: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    page: null,
    documentBorderWidth: null,
    small: null,
    medium: null,
    large: null,
  },
})

const space = {
  1: '0.5rem',
  2: '1rem',
  3: '1.25rem',
  4: '1.875rem',
  5: '2.8125rem',
}

export const theme = style({
  vars: assignVars(vars, {
    colors: {
      body: '#020202',
      bodySubtle: 'rgb(69, 68, 68)',
      background: 'rgb(253, 206, 245)',
      documentBorder: '#fff',
      accentA: '#090efe',
      accentB: '#f8ce03',
      accentC: '#e3fffd',
    },
    fonts: {
      body: `var(--font-pt-root-ui), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    },
    space: {
      ...space,
      page: '15vmin',
      documentBorderWidth: vars.space.medium,
      small: vars.space[1],
      medium: vars.space[2],
      large: vars.space[3],
    },
  }),
  '@media': {
    [`(min-width: ${inlineBreakpoints[0]})`]: {
      vars: assignVars(vars.space, {
        1: `calc(${space[1]} * 1.25)`,
        2: `calc(${space[2]} * 1.25)`,
        3: `calc(${space[3]} * 1.25)`,
        4: `calc(${space[4]} * 1.25)`,
        5: `calc(${space[5]} * 1.25)`,
        page: '15vmin',
        documentBorderWidth: vars.space.medium,
        small: vars.space[1],
        medium: vars.space[2],
        large: vars.space[3],
      }),
    },
    [`(min-width: ${inlineBreakpoints[1]})`]: {
      vars: assignVars(vars.space, {
        1: `calc(${space[1]} * 1.25 * 1.25)`,
        2: `calc(${space[2]} * 1.25 * 1.25)`,
        3: `calc(${space[3]} * 1.25 * 1.25)`,
        4: `calc(${space[4]} * 1.25 * 1.25)`,
        5: `calc(${space[5]} * 1.25 * 1.25)`,
        page: '15vmin',
        documentBorderWidth: vars.space.medium,
        small: vars.space[1],
        medium: vars.space[2],
        large: vars.space[3],
      }),
    },
  },
})

// FIXME responsive theme
// export const { styled, getCssText, globalCss, createTheme, config, theme } =
//   createStitches({
//     media: {
//       belowI1: '(max-width: 29.999em)',
//       i1: '(min-width: 30em)',
//       belowI2: '(max-width: 44.999em)',
//       i2: '(min-width: 45em)',
//       belowI3: '(max-width: 65.999em)',
//       i3: '(min-width: 65em)',
//       belowI4: '(max-width: 72.999em)',
//       i4: '(min-width: 72em)',
//     },
//     theme: {},
//     utils: {
//       stackInline: (gap: PropertyValue<'marginInlineStart'>) => ({
//         '& > * + *': {
//           marginInlineStart: gap,
//         },
//       }),
//       stackBlock: (gap: PropertyValue<'marginBlockStart'>) => ({
//         '& > * + *': {
//           marginBlockStart: gap,
//         },
//       }),
//     },
//   })
