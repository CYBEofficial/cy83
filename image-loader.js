// Simple image loader that returns the same path for static export
module.exports = function customImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
};
