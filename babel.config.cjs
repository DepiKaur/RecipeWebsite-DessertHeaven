// babel.config.js
module.exports = {
    presets: [
      [
        '@babel/preset-env', 
        { 
        targets: { node: 'current' } 
        }
      ],
      [
        '@babel/preset-react', 
        {
        "runtime": "automatic" // Use automatic runtime for JSX
        }
      ]
    ],
};