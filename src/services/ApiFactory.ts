import { ApiProjects } from './ApiProjects';
import { ApiGithub } from './ApiGithub';

export class ApiFactory {
  public static createProjectsApi(): ApiProjects {
    return new ApiProjects(
      'https://api-mini-projetos-guimrl.vercel.app/nprojects',
    );
  }

  public static createGithubApi(): ApiGithub {
    return new ApiGithub('https://api.github.com/users/guimrl');
  }
}
