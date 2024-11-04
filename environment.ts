export const environment = {
  production: true,
  apiUrl: process.env['NG_APP_BASE_URL'] || '', // Add fallback if NG_APP_BASE_URL is undefined
};
