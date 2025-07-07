import { Last5Projects } from '../interfaces/Last5ProjectsInterface';
import { Api } from './Api';

export class ApiLast5Projects extends Api {
  constructor(url: RequestInfo | URL) {
    super(url);
  }

  async getData(): Promise<Last5Projects[]> {
    const res: Response = await fetch(this.url);
    const data: Last5Projects[] = await res.json();

    console.log(
      'data',
      data.map((el: any) => el?.updated_at),
    );
    data.sort((a: any, b: any) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);

      return dateB.getTime() - dateA.getTime();
    });

    const top5RecentProjects = data.slice(0, 5);

    console.log(
      'Top 5 Últimos Projetos (ordenados):',
      top5RecentProjects.map((repo: any) => ({
        repo,
        // name: repo.name,
        // html_url: repo.html_url,
        // updated_at: repo.updated_at,
        // language
      })),
    );

    //para acessar, talvez?

    // top5RecentProjects.map(repo => {
    //     console.log(`Nome: ${repo.name}, URL: ${repo.html_url}, Última Atualização: ${repo.updated_at}`);
    // });

    return data;
  }
}
