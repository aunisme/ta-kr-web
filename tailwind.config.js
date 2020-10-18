module.exports = {
  purge: false, // purge handle by postcss
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'focus', 'group-hover'],
    borderStyle: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
      defaultLineHeights: true,
      standardFontWeights: true
  },
  
}
