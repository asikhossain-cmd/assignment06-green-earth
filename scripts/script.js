

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


// Fetch and Display All Trees
const getAllPlant = () => {
    const url = 'https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then((response) => response.json())
    .then(resData => {
        displayAllTrees(resData.plants)
        
        }
    )
};

const viewAllPlants = () => {
    const url = 'https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then((response) => response.json())
    .then(resData => {viewAllFunc(resData.plants)})
};

// Display All Plants
const displayAllTrees = (plants) => {
    for(const plant of plants.slice(1,7)) {
        // Get the display trees section
        const getPlantsContainer = document.getElementById('tree-card-container');


        const createNewPlatsDiv = document.createElement('div');
        createNewPlatsDiv.innerHTML = `
                <div class="tree-card max-w-80 h-full p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">Fruit Tree</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button class="w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;

        getPlantsContainer.appendChild(createNewPlatsDiv)

    }
    // Get the All trees button
    const allTreesBtn = document.getElementById('all-trees-btn')
    allTreesBtn.style.backgroundColor = '#15803D'
    allTreesBtn.style.color = 'white'
}

// View All Plant
    const viewAllFunc = (plants) => {
        const getPlantsContainer = document.getElementById('tree-card-container');
        getPlantsContainer.innerHTML = '';
        for(const plant of plants) {
        // Get the display trees section

        const createNewPlatsDiv = document.createElement('div');
        createNewPlatsDiv.innerHTML = `
                <div class="tree-card max-w-80 h-full p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">${plant.category}</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button class="w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;
            
        getPlantsContainer.appendChild(createNewPlatsDiv)

    }
    const getViewBtn = document.getElementById('view-all-btn');
    getViewBtn.style.display = 'none';
}
getAllPlant()
getPlantCategory()