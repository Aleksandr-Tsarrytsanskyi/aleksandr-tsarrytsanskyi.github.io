export function burgerMenu() {
    const burger = document.querySelector(".burger");
const menu = document.querySelector("#mainMenu");

if (burger && menu) {

    const toggleMenu = () => {
        const isOpen = burger.classList.toggle("is-active");

        menu.classList.toggle("is-open", isOpen);

        burger.setAttribute("aria-expanded", String(isOpen));
        burger.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );

        document.body.classList.toggle("menu-open", isOpen);
    };

    burger.addEventListener("click", toggleMenu);

    // Закрываем меню после клика по ссылке
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("is-active");
            menu.classList.remove("is-open");

            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Открыть меню");

            document.body.classList.remove("menu-open");
        });
    });

    // Закрытие по Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            burger.classList.remove("is-active");
            menu.classList.remove("is-open");

            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Открыть меню");

            document.body.classList.remove("menu-open");
        }
    });

}
}