import { ApiProjects } from "./ApiProjects";
import { ApiGithub } from "./apiGithub";

export class ApiFactory {
    public static createProjectsApi(): ApiProjects {
        return new ApiProjects("https://api-mini-projetos.up.railway.app/nprojects");
    }

    public static createUserApi(): ApiGithub {
        return new ApiGithub("https://api.github.com/users/guimrl");
    }
}
