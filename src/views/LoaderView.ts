
export class LoaderView {
    private loaderEl: HTMLElement | null = document.querySelector("#maintenance");

    public render() {
        if (this.loaderEl) {
            this.loaderEl.innerHTML = `<div class="maintenance"></div>`;
        }
    }
}
