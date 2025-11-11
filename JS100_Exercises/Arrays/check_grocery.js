const groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

//check initial groceryList
console.log(groceryList);

for (let groceryItem = 0; groceryItem < groceryList.length; groceryItem += 1) {
  console.log(groceryList[groceryItem]);
  groceryList.splice(0,1);
  groceryItem -= 1;
}

//verify final groceryList
console.log(groceryList);

