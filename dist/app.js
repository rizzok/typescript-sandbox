"use strict";
const compteur = document.getElementById('compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span)
        span.innerHTML = i.toString();
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
//# sourceMappingURL=app.js.map