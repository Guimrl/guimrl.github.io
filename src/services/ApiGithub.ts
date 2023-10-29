import { Github } from '../interfaces/GithubInterface';
import { Api } from './Api';

export class ApiGithub extends Api {
  constructor(url: RequestInfo | URL) {
    super(url);
  }

  async getData(): Promise<Github> {
    const res: Response = await fetch(this.url);
    const data: Github = await res.json();

    return data;
  }
}
