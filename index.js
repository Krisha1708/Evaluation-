//<---------------------------------------------Question no. 3------------------------------------------------------>

const supermarketData = {
  supermarketName: "SuperMart",
  location: "Cityville",
  products: {
    electronicsSection: {
      inventory: {
        laptop: { available: 20, price: 800 },
        smartphone: { available: 30, price: 500 },
        tablet: { available: 15, price: 300 },
      },
      sales: [
       { id: 1, items: ["laptop", "tablet"], total: 1100 },
        { id: 2, items: ["smartphone", "tablet"], total: 800 },
        { id: 3, items: ["laptop", "smartphone"], total: 1300 },
      ],
    },
    clothingSection: {
      inventory: {
        shirt: { available: 50, price: 25 },
        jeans: { available: 40, price: 40 },
        dress: { available: 30, price: 60 },
     },
      sales: [
        { id: 1, items: ["shirt", "jeans"], total: 60 },
        { id: 2, items: ["dress", "shirt"], total: 85 },
       { id: 3, items: ["jeans", "dress"], total: 100 },
      ],
   },
 },
  sectionNames: ["electronicsSection", "clothingSection"],
};

function productDetails(supermarketData, items){
  let result ={inventory:{} };
  
  items.forEach(item =>{
    let foundItem = null;
    
    // check in electronicsSection
    if(!foundItem){
      foundItem = inventory.electronicsSection.find(electronicsSection=>electronicsSection.laptop);
    }
    
    // check in clothingSection
    if(!foundItem){
      foundItem = inventory.clothingSection.find(cloth => clothingSection.shirt);
    }
    
    if(foundItem){
      result.inventory[itme.toLowerCase()] = {
        available: foundItem.available,
        price: foundItem.price
      };
    }
  });
  return result;
}
  

let itemsToCheck = ["laptop", "shirt"];
let output = productDetails(supermarketData,itemsToCheck);
console.log(output);


//<-----------------------Question No. 1------------------------------>

function rearrangedFruits(fruits) {
    // Remove the last 4 elements from an array
    const removeFruits = fruits.splice(fruits.length - 4, 4);
    
    // Add the removed fruits in begining of the array
    fruits.splice(0, 0, ...removeFruits);

    return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangedFruits(fruits));


//<-----------------------Question No. 2-------------------------------->

function groupAndSortProducts(products) {
    return products.reduce((acc, product) => {
        // Grouped by categories
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {}),

        // Sorting the product in each Category
        Object.keys(acc).forEach(category => {
            acc[category] = acc[category].sort((a, b) => b.rating - a.rating);
        });
    return acc;
}

const products = [
 { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
 { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
 { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 },
 { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
 { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 },
 { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
 { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
 { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
 { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 },
 { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
 { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
 { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
];

console.log(groupAndSortProducts(products));
