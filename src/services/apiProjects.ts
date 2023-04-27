
import { Projects } from "src/interfaces/ProjectsInterface";

export async function apiProjects(): Promise<Projects[]> {
    const url = "https://api-mini-projetos.up.railway.app/nprojects";
    const res = await fetch(url);
    const projects = await res.json();
    return projects;
}
