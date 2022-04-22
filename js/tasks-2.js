/**
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul.ingredients.
*/


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