export function footer(): void {
    const footer: HTMLElement | null = document.querySelector("#footerTag");

    if (footer) {
        footer.innerHTML = `
        <div class="footer">
            <p>&copy; Guilherme<span class="highlight"> Amaral</span> - 2023</p>
        </div>`;
    }
}
