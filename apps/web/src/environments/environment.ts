export const environment = {
  environmentName: process.env["NODE_ENV"] || 'development',
  production: process.env["NODE_ENV"] === 'production',
  backendApiUrl: process.env["BACKEND_API_URL"] || ''
};
