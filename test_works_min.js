const axios = require('axios');

const apiKey = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5';
const query = '12oz onion and a tomato';

axios.get('https://api.calorieninjas.com/v1/nutrition?query='+query, {
  headers: {
    'X-API-Key': apiKey
  }
})
.then(response => {
 const obj = response.data; 
 let totalCalories = 0.0, totalFat = 0.0, totalSaturatedFat = 0.0, totalProtein = 0.0, totalSodium = 0.0, totalPotassium = 0.0, totalCholesterol = 0.0, totalCarbohydrates = 0.0, totalFiber = 0.0, totalSugar = 0.0;

  for (let i = 0; i < obj.items.length; i++) {
    totalCalories = totalCalories + obj.items[i]['calories'];
    totalFat = totalFat + obj.items[i]['fat_total_g'];
    totalSaturatedFat  = totalSaturatedFat  + obj.items[i]['fat_saturated_g']
    totalProtein = totalProtein  + obj.items[i]['protein_g'];
    totalSodium = totalSodium  + obj.items[i]['sodium_mg'];
    totalPotassium = totalPotassium  + obj.items[i]['potassium_mg'];
    totalCholesterol = totalCholesterol  + obj.items[i]['cholesterol_mg'];
    totalCarbohydrates = totalCarbohydrates  + obj.items[i]['carbohydrates_total_g'];
    totalFiber = totalFiber  + obj.items[i]['fiber_g'];
    totalSugar = totalSugar  + obj.items[i]['sugar_g'];
}

console.log('total grams of fat for the meal is :',totalFat);
console.log('total calories for the meal is :',totalCalories);
console.log('total grams of saturated fat for the meal is :',totalFat);
console.log('total grams of protein the meal is :',totalProtein);
console.log('total milligrams sodium the meal is :',totalSodium);
console.log('total milligrams of potassium the meal is :',totalPotassium);
console.log('total milligrams of cholesterol the meal is :',totalCholesterol);
console.log('total grams of carbohydrates the meal is :',totalCarbohydrates);
console.log('total grams of fiber the meal is :',totalFiber);
console.log('total grams of sugar the meal is :',totalSugar);

})
.catch(error => {
  console.error(error);
});
