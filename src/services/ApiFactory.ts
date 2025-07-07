import { ApiProjects } from './ApiProjects';
import { ApiGithub } from './ApiGithub';
import { ApiLast5Projects } from './Last5projects';

export class ApiFactory {
  public static createProjectsApi(): ApiProjects {
    return new ApiProjects(
      'https://api-mini-projetos-guimrl.vercel.app/nprojects',
    );
  }

  public static createGithubApi(): ApiGithub {
    return new ApiGithub('https://api.github.com/users/guimrl');
  }

  public static createLast5ProjectsApi(): ApiLast5Projects {
    return new ApiLast5Projects('https://api.github.com/users/Guimrl/repos');
  }
}
