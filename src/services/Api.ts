export abstract class Api {
  protected url: RequestInfo | URL;

  constructor(url: RequestInfo | URL) {
    this.url = url;
  }

  abstract getData(): Promise<any>;
}
