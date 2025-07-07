export class DownloadCV {
  private button: HTMLElement | null = document.querySelector('#downloadCvBtn');
  private fileUrl: string =
    'https://drive.google.com/uc?export=download&id=1PujszdPae5ke5kBYWEQh3CXziPg05Sgn';

  private download(): void {
    const link = document.createElement('a');
    link.href = this.fileUrl;
    link.download = 'GUILHERME AMARAL - CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  public render(): void {
    if (this.button) {
      this.button.innerHTML = `
        <button 
          title="Botão para baixar o currículo em PDF"
          type="button" 
          class="btn-cv" 
          onclick="${this.download()}">
          <i class="fa-solid fa-cloud-arrow-down"></i>
          <span class="cv-letra">Download CV</span>
        </button>
      `;
    }
  }
}
