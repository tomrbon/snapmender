/**
 * Eleventy Configuration for SnapMender
 * AI Photo Restoration Landing Page
 */

module.exports = function(eleventyConfig) {
  
  // ═══════════════════════════════════════════════════════════════════════════
  // FILTERS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Slug filter for URLs
  eleventyConfig.addFilter('slug', function(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  });
  
  // Current year for footer
  eleventyConfig.addFilter('year', () => new Date().getFullYear());
  
  // Date formatting
  eleventyConfig.addFilter('dateFormat', function(date) {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });
  
  // Escape HTML for JSON-LD
  eleventyConfig.addFilter('escape', function(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // GLOBAL DATA
  // ═══════════════════════════════════════════════════════════════════════════
  
  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());

  // ═══════════════════════════════════════════════════════════════════════════
  // PASSTHROUGH COPIES
  // ═══════════════════════════════════════════════════════════════════════════
  
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('favicon.svg');

  // Watch targets
  eleventyConfig.addWatchTarget('./css/');
  eleventyConfig.addWatchTarget('./images/');

  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════
  
  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};