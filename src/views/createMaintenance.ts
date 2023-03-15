export function createMaintenance(): void {
    const maintenance: HTMLElement | null = document.querySelector("#maintenance");
    if (maintenance) {
        maintenance.innerHTML = `
        <div class="maintenance"></div>
        <h3 class="h2Maintenance">Página em manutenção</h3>
        <h4>Voltaremos em breve com novidades</h4>`;
    }
}
