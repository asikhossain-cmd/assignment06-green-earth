

// Get and Desing the Category Section
const getPlantCategory = () => {
    const url = 'https://openapi.programming-hero.com/api/categories'
    fetch(url)
    .then((response => response.json()))
    .then((resData => displayCategory(resData.categories)))
}

const displayCategory = (categories) => {
    categories.forEach((category) => {
        const categoryName = category.category_name;
        // Get the category Section to display
        const getCategorySection = document.getElementById('category-name-section');
        const createNewElement = document.createElement('div')
        createNewElement.innerHTML = `
            <div id="category-name-section" class="category-name flex flex-col gap-1">
                <p class="text-lg font-medium w-full text-left py-2 px-2 hover:text-white transition-all rounded-md hover:bg-[#15803D] cursor-pointer">${categoryName}</p>
            </div>
        `;
        getCategorySection.appendChild(createNewElement)
    })
}
getPlantCategory()