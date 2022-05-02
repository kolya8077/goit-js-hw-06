const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ulEl = document.querySelector('#ingredients');

const itemEl = ingredients.map((option) => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add('item');
    ingredientsEl.textContent = option;
    return ingredientsEl;
})
console.log(itemEl);

ulEl.append(...itemEl)