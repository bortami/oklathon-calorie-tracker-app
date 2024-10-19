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
console.log(Object.keys(obj));
console.log(obj.items[0]);
console.log(obj.items[0]['name']);
console.log(obj.items[0]['serving_size_g']);
console.log(obj.items[0]['fat_total_g']);
console.log(obj.items[0]['fat_saturated_g']);
console.log(obj.items[0]['protein_g']);
console.log(obj.items[0]['sodium_mg']);
console.log(obj.items[0]['potassium_mg']);
console.log(obj.items[0]['cholesterol_mg']);
console.log(obj.items[0]['carbohydrates_total_g']);
console.log(obj.items[0]['fiber_g']);
console.log(obj.items[0]['sugar_g']);
console.log(obj.items.length);
let totalCalories = 0.0, totalFat = 0.0, totalSaturatedFat = 0.0, totalProtein = 0.0, totalSodium = 0.0, totalPotassium = 0.0, totalCholesterol = 0.0, totalCarbohydrates = 0.0, totalFiber = 0.0, totalSugar = 0.0;
//let totalFat, totalSaturatedFat, totalProtein, totalSodium, totalPotassium, totalCholesterol, totalCarbohydrates, totalFiber, totalSugar = 0.0;
for (let i = 0; i < obj.items.length; i++) {
    console.log('item number:',i);
    console.log('the name is:',obj.items[i]['name']);
    console.log('the serving size in gram is',obj.items[i]['serving_size_g']);
    console.log('the calories for the item is',obj.items[i]['calories']);
    totalCalories = totalCalories + obj.items[i]['calories'];
    console.log('the total fat in grams is:',obj.items[i]['fat_total_g']);
   // console.log(typeof(obj.items[i]['fat_total_g']));
   // console.log('the total fat in grams is:',obj.items[i]['fat_total_g'] + 5);
    totalFat = totalFat + obj.items[i]['fat_total_g'];
   // console.log('total fat for the meal is :',totalFat);
    console.log('the total saturated fat in grams is:',obj.items[i]['fat_saturated_g']);
    totalSaturatedFat  = totalSaturatedFat  + obj.items[i]['fat_saturated_g']
    console.log('the total grams of protein is:',obj.items[i]['protein_g']);
    totalProtein = totalProtein  + obj.items[i]['protein_g'];
    console.log('the total grams of sodium is:',obj.items[i]['sodium_mg']);
    totalSodium = totalSodium  + obj.items[i]['sodium_mg'];
    console.log('the total grams of potassium is:',obj.items[i]['potassium_mg']);
    totalPotassium = totalPotassium  + obj.items[i]['potassium_mg'];
    console.log('the total grams of cholesterol is:',obj.items[i]['cholesterol_mg']);
    totalCholesterol = totalCholesterol  + obj.items[i]['cholesterol_mg'];
    console.log('the total grams of carbohydrate is:',obj.items[i]['carbohydrates_total_g']);
    totalCarbohydrates = totalCarbohydrates  + obj.items[i]['carbohydrates_total_g'];
    console.log('the total grams of fiber is:',obj.items[i]['fiber_g']);
    totalFiber = totalFiber  + obj.items[i]['fiber_g'];
    console.log('the total grams of sugar is:',obj.items[i]['sugar_g']);
    totalSugar = totalSugar  + obj.items[i]['sugar_g'];
    console.log('\n');
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
