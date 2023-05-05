
export abstract class Loader {

    public static onLoad(): void {
        const load: HTMLElement | null = document.querySelector("#load");
        if (load) {
            load.style.display = "flex";
        }

        window.addEventListener("load", () => {
            if (load) {
                load.style.display = "none";
            }
        });
    }
}
