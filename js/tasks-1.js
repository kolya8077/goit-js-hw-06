const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const itemEl = document.querySelectorAll("li.item")
itemEl.forEach((category) => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
});

/*
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
 */




