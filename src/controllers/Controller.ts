import { Model } from '../models/Model';
import { ApiFactory } from '../services/ApiFactory';
import { ApiGithub } from '../services/ApiGithub';
import { ApiGithubView } from '../views/ApiGithubView';
import { ApiProjects } from '../services/ApiProjects';
import { createProjects } from '../views/createProjects';

export class Controller {
  public init(): void {
    try {
      const model = new Model();
      model.render();

      const githubApi: ApiGithub = ApiFactory.createGithubApi();
      githubApi
        .getData()
        .then(data => ApiGithubView.getApi(data))
        .catch(erro => {
          erro.request.status === 404
            ? console.error(
                `Error: ${erro.request.statusText} - ${erro.request.status}`,
              )
            : console.error(`Error: ${erro}`);
        })
        .finally(() => {
          console.log('Página carregada com sucesso!');
        });

      const projectsApi: ApiProjects = ApiFactory.createProjectsApi();
      projectsApi.getData().then(projects => createProjects(projects));
    } catch (e) {
      console.log(e.message);
    }
  }
}
