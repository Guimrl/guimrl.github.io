import { Api } from "./Api";
export class ApiProjects extends Api {
    constructor(url) {
        super(url);
    }
    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}
