// export class Loader {
//     private load: HTMLElement | null = document.querySelector("#maintenance");

//     public onLoad() {
//         if (this.load) {
//             this.load.style.display = "flex";
//         }
//         window.addEventListener("load", () => {
//             if (this.load) {
//                 this.load.style.display = "none";
//             }
//         })
//     }
// }
// export function onMaintenance(): void {
//     const maintenance: HTMLElement | null = document.querySelector('#maintenance');
//     if (maintenance) {
//         maintenance.style.display = "flex";
//     }
// }

export function hideMaintenance(): void {
    const maintenance: HTMLElement | null = document.querySelector('#maintenance');
    if (maintenance) {
        maintenance.style.display = "none";
    }
    // window.addEventListener('load', () => {
    //     loaderElement.style.display = 'none';
    // });
}
