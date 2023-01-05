module.exports = {
  apps: [
    {
      name: 'main',
      script: './dist/main.js',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
