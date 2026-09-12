const API_URLS = {
  resumeGenerator: 'https://resume-generator-core.vercel.app',
} as const;

export type ApiName = keyof typeof API_URLS;

export const resolveApiUrl = (apiName: ApiName) => API_URLS[apiName];

export const endpoints = {
  resumeGenerator: {
    principal: '/principal',
  },
} as const;
