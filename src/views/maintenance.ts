export function maintenance() {
    const maintenance: HTMLElement | null = document.querySelector('#maintenance');
    if (maintenance) {
        maintenance.style.display = "flex";
    }
}

export function hideMaintenance() {
    const maintenance: HTMLElement | null = document.querySelector('#maintenance');
    if (maintenance) {
        maintenance.style.display = "none";
    }
}