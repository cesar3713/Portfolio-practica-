
export default function hamburgerMenu(panelBtn, nav, menuLink) {
    const d = document;

    d.addEventListener("click", e => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(nav).classList.toggle("nav-is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)) {
            d.querySelector(nav).classList.remove("nav-is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

