module.exports = {
  purge: false, // purge handle by postcss
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'focus', 'group-hover']
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
      defaultLineHeights: true,
      standardFontWeights: true
  },
  
}
