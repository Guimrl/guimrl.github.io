import { Projects } from "src/interfaces/ProjectsInterface";

export class ApiProjects {
    private url: RequestInfo | URL = "https://api-mini-projetos.up.railway.app/nprojects";

    public async getData(): Promise<Projects[]> {
        const res: Response = await fetch(this.url);
        const data: Projects[] = await res.json();

        return data;
    }
}
