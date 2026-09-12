import ApiClient from './api/ApiClient';
import { endpoints } from './api/endpoints';

export type ResumePayload = Record<string, unknown>;

type ResumeResponse = {
  message: string;
  pdf: string;
};

const resumeGeneratorApi = new ApiClient('resumeGenerator').http;

export const generateResume = async (payload: ResumePayload) => {
  const response = await resumeGeneratorApi.post<ResumeResponse>(
    endpoints.resumeGenerator.principal,
    payload,
  );

  if (!response.data.pdf) {
    throw new Error('The API response does not contain a PDF.');
  }

  return response.data.pdf;
};
