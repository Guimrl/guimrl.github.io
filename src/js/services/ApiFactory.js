import { ApiProjects } from './ApiProjects';
import { ApiGithub } from './ApiGithub';
export class ApiFactory {
  static createProjectsApi() {
    return new ApiProjects(
      'https://api-mini-projetos-guimrl.vercel.app/nprojects',
    );
  }
  static createGithubApi() {
    return new ApiGithub('https://api.github.com/users/guimrl');
  }
}
