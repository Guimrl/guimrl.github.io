import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import { type ApiName, resolveApiUrl } from './endpoints';

class ApiClient {
  public readonly http: AxiosInstance;

  constructor(
    apiName: ApiName,
    config: Omit<CreateAxiosDefaults, 'baseURL'> = {},
  ) {
    this.http = axios.create({
      ...config,
      baseURL: resolveApiUrl(apiName),
    });
  }
}

export default ApiClient;
