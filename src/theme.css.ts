import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
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
    1: '0.5rem',
    2: '1rem',
    3: '1.25rem',
    4: '1.875rem',
    5: '2.8125rem',
    page: '15vmin',
    // FIXME - semantic tokens
    // documentBorderWidth: '$2',
    documentBorderWidth: '1rem',
    // small: '$1',
    small: '0.5rem',
    // medium: '$2',
    medium: '1rem',
    // large: '$3',
    large: '1.25rem',
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
