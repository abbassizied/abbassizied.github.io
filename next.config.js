const withNextra = require('nextra')('nextra-theme-blog', './theme.config.jsx')
module.exports = withNextra({ 
    output: 'export',
    images: {
        unoptimized: true
    },
     basePath: '/github-pages',  
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'out',
})
