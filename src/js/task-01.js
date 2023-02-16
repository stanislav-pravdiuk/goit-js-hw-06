
const categoriesRef = document.querySelectorAll('li.item');

const numberOfCategoriesRef = categoriesRef.length;

console.log(`Number of categories: ${numberOfCategoriesRef}`);

const categoryRef = categoriesRef.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    console.log(`Category: ${category} 
Elements: ${elements}`)
});
