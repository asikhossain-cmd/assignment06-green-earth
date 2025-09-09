

// Active Button By Click
const removeBtn = () => {
    const getBtn = document.querySelectorAll('.category-btn');
    getBtn.forEach((btnRemove) => {
        btnRemove.classList.remove('active')
    })
}


// Get plant details
const plantWordDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then((response) => response.json())
    .then((resData) => showPlantDetails(resData.plants))
}

// Show Plant details in modal
const showPlantDetails = (plant) => {
    // Get Modal Parant
    const getModal = document.getElementById('details-modal-container');
    getModal.innerHTML = '';
    const createNewDiv = document.createElement('div');
    createNewDiv.innerHTML = `
        <h1>${plant.name}</h1>
        <img src="${plant.image}" alt="Plant Image">
        <p>${plant.category}</p>
        <p>${plant.price}</p>
        <p>${plant.description}</p>
    `
    getModal.appendChild(createNewDiv);
    document.getElementById('my_modal_5').showModal()
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
                    <h2 onclick = 'plantWordDetails(${plant.id})' class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">Fruit Tree</p>
                        <p class="font-semibold">৳<span>${plant.price}</span></p>
                    </div>
                    <button class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
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
                <div class="tree-card max-w-80 h-full p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 onclick = 'plantWordDetails(${plant.id})' class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">${plant.category}</p>
                        <p class="font-semibold">৳<span>${plant.price}</span></p>
                    </div>
                    <button class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
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
                <div class="tree-card max-w-80 h-[500px] p-4 bg-white rounded-xl flex flex-col justify-between">
                    <img src="${plant.image}" alt="Picture" class="h-50 w-[100vw] rounded-xl">
                    <h2 onclick = 'plantWordDetails(${plant.id})' class="text-lg font-semibold mt-3">${plant.name}</h2>
                    <p class="text-sm font-normal text-gray-700 text-justify mt-2">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="px-4 py-1 rounded-2xl text-[#15803D] bg-green-200 mt-2">${plant.category}</p>
                        <p class="font-semibold">৳<span>${plant.price}</span></p>
                    </div>
                    <button class="add-to-cart-btn w-full bg-[#15803D] p-2 rounded-3xl text-white mt-3 cursor-pointer">Add to Cart</button>
                </div>
        `;
        getPlantsContainer.appendChild(createNewPlatsDiv)
    }   
    const getViewBtn = document.getElementById('view-all-btn');
    getViewBtn.style.display = 'none';

}


// Cart Items Show Section
let totalCart = 0
const getCardContainer = document.getElementById('tree-card-container');
getCardContainer.addEventListener('click', (e) => {
    if(e.target.className.includes('add-to-cart-btn')) {
        const getBtn = e.target;
        totalCart+=1


        console.log(totalCart)
        const getPlantName = getBtn.parentNode.children[1].innerText;
        const getPlantPrice = Number(getBtn.parentNode.children[3].children[1].children[0].innerText);
       

        // Get the cart section
        const getCartSection = document.getElementById('cart-items-container');

        // Create a new div for cart
        const createNewDiv = document.createElement('div');
        createNewDiv.innerHTML = `
                    <div id='cart-item-individual' class="w-full h-auto mb-2 p-3 bg-green-200 rounded-lg flex justify-between items-center">
                        <div class="name-and-price">
                            <p class="font-medium text-lg">${getPlantName}</p>
                            <p class="text-gray-500 text-sm">৳${getPlantPrice} <span class='fa-solid fa-xmark text-gray-500 text-[12px]'></span><span> 1</span></p>
                        </div>
                        <div class="cross-cancel">
                            <i id="cross-cancel-cart-item" class="fa-solid fa-xmark text-gray-500 hover:text-red-500 cursor-pointer"></i>
                        </div>
                    </div>
            `
        
        getCartSection.appendChild(createNewDiv);

        
        createNewDiv.querySelector('i').addEventListener('click', () => {
            createNewDiv.remove()
            updatePrice(-getPlantPrice)
        })

        updatePrice(getPlantPrice)


    }
})

// Check Total Price and Decrease and Show and Hide the total price section (This is a function)

const updatePrice = (updatedPrice) => {
    let getTotalPrice = document.getElementById('total-money');
    let getTotalPriceText = Number(getTotalPrice.innerText);
    let getUpdatedPrice = getTotalPriceText + updatedPrice;
    getTotalPrice.innerText = getUpdatedPrice

    // Show and Disable the total amount section
    const getCartTotal = document.getElementById('total-money-section-cart');
    const getCartHorizontaLine = document.getElementById('cart-horizontal-line');
    const getNoCartNotice = document.getElementById('show-please-add-cart');
    if(getUpdatedPrice > 0) {
        // get the cart total section\
        getNoCartNotice.style.display = 'none';
        getCartTotal.style.display = 'flex';
        getCartHorizontaLine.style.display = 'block';
    }else {
        getNoCartNotice.style.display = 'block';
        getCartTotal.style.display = 'none';
        getCartHorizontaLine.style.display = 'none';
    }
}

getAllPlant()
getPlantCategory()


