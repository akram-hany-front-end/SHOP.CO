document.querySelectorAll(".counter-cart").forEach(counter => {
const plus = counter.querySelector(".plus");
const minus = counter.querySelector(".minus");
const span = counter.querySelector(".count");
plus.addEventListener("click", () => {
    span.textContent = parseInt(span.textContent) + 1;
});

minus.addEventListener("click", () => {
    let value = parseInt(span.textContent);
    if (value > 1) span.textContent = value - 1;
});

});
