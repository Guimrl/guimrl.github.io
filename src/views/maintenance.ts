export function onMaintenance(): void {
    const maintenance: HTMLElement | null = document.querySelector('#maintenance');
    if (maintenance) {
        maintenance.style.display = "flex";
    }
}

export function hideMaintenance(): void {
    const maintenance: HTMLElement | null = document.querySelector('#maintenance');
    if (maintenance) {
        maintenance.style.display = "none";
    }
}