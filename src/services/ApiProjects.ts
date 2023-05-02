import { Projects } from "src/interfaces/ProjectsInterface";
import { Api } from "./Api";

export class ApiProjects extends Api {
    constructor(url: RequestInfo | URL) {
        super(url);
    }

    async getData(): Promise<Projects[]> {
        const res: Response = await fetch(this.url);
        const data: Projects[] = await res.json();

        return data;
    }
}
