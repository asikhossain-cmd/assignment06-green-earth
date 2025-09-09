

// Active Button By Click
const removeBtn = () => {
    const getBtn = document.querySelectorAll('.category-btn');
    getBtn.forEach((btnRemove) => {
        btnRemove.classList.remove('active')
    })
}

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
                <p id='category-btn${category.id}' onclick = "getPlantsByCategory(${category.id})" class="category-btn categories-name-btn text-lg font-medium w-full text-left py-2 px-2 hover:text-white transition-all rounded-md hover:bg-[#15803D] cursor-pointer">${categoryName}</p>
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
    const getPlantsContainer = document.getElementById('tree-card-container');
    getPlantsContainer.innerHTML = '';
    for(const plant of plants.slice(1,7)) {
        // Get the display trees section
        const getPlantsContainer = document.getElementById('tree-card-container');


        const createNewPlatsDiv = document.createElement('div');
        createNewPlatsDiv.innerHTML = `
                <div id='trees-cards' class="tree-card max-w-80 h-full p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">Fruit Tree</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button onclick = 'addToCartBtn()' class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;

        getPlantsContainer.appendChild(createNewPlatsDiv)

    }
    const getViewBtn = document.getElementById('view-all-btn');
    getViewBtn.style.display = 'block'
    // Get the All trees button
    
    const allTreesBtn = document.getElementById('all-trees-btn')
    removeBtn()
    allTreesBtn.addEventListener('mouseenter', () => {
        allTreesBtn.style.backgroundColor = '#15803D'
        allTreesBtn.style.color = 'white'
    })
    allTreesBtn.addEventListener('mouseleave', () => {
        allTreesBtn.style.background = 'none'
        allTreesBtn.style.color = 'black'
    })
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
                <div class="tree-card max-w-80 h-[450px] p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">${plant.category}</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button onclick = 'addToCartBtn()' class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;
            
        getPlantsContainer.appendChild(createNewPlatsDiv)

    }
    const getViewBtn = document.getElementById('view-all-btn');
    getViewBtn.style.display = 'none';
}


// Let's Arrange items by category

// Fetch product by category
const getPlantsByCategory = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((response) => response.json())
    .then((resData) => {
        categoryItems(resData.plants)
        const getAllPlantBtn = document.getElementById('all-trees-btn');
        getAllPlantBtn.style.background = 'none';
        getAllPlantBtn.style.color = 'black';

        removeBtn()

        const getAllBtn = document.getElementById(`category-btn${id}`)
        getAllBtn.classList.add('active')
        
    })
}
const categoryItems = (plants) => {
    const getPlantsContainer = document.getElementById('tree-card-container');
        getPlantsContainer.innerHTML = '';
        for(const plant of plants) {
        // Get the display trees section

        const createNewPlatsDiv = document.createElement('div');
        createNewPlatsDiv.innerHTML = `
                <div class="tree-card max-w-80 max-h-[600px] p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">${plant.category}</p>
                        <p class="font-semibold">৳${plant.price}</p>
                    </div>
                    <button onclick = 'addToCartBtn()' class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;
        getPlantsContainer.appendChild(createNewPlatsDiv)
    }   
    const getViewBtn = document.getElementById('view-all-btn');
    getViewBtn.style.display = 'none';

}


// Cart Items Show Section
const getCartSection = document.getElementById('cart-container-section');



const getCards = document.querySelectorAll('.tree-card')


// console.log(getCards)
// // Get the add to cart button
const addToCartBtn = () => {
    const getName = parentNode.childNode[0]
        console.log(getName)
}

getAllPlant()
getPlantCategory()


