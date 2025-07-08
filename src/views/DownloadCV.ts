export class DownloadCV {
  private containerElement: HTMLElement | null;
  private fileUrl: string =
    'https://drive.google.com/uc?export=download&id=1PujszdPae5ke5kBYWEQh3CXziPg05Sgn';
  private fileName: string = 'GUILHERME AMARAL - CV.pdf';

  constructor(containerId: string) {
    this.containerElement = document.querySelector(containerId);
  }

  private download(): void {
    console.log('Download do CV iniciado!');
    const link = document.createElement('a');
    link.href = this.fileUrl;
    link.download = this.fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  public render(): void {
    if (this.containerElement) {
      this.containerElement.innerHTML = `
        <button
          title="Botão para baixar o currículo em PDF"
          type="button"
          class="btn-cv"
          id="cvActualDownloadButton"> <i class="fa-solid fa-cloud-arrow-down"></i>
          <span class="cv-letra">Download CV</span>
        </button>
      `;

      const actualButton = this.containerElement.querySelector(
        '#cvActualDownloadButton',
      );

      if (actualButton) {
        actualButton.addEventListener('click', this.download.bind(this));
      }
    }
  }
}
