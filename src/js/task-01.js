
const categoriesRef = document.querySelectorAll('li.item');

const numberOfCategoriesRef = categoriesRef.length;

console.log(`Number of categories: ${numberOfCategoriesRef}`);

const categoryRef = categoriesRef.forEach(el => {
    console.log('Category:', el.firstElementChild.textContent,
        'Elements:', el.lastElementChild.children.length)
});




