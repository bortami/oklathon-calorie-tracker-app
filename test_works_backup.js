const axios = require('axios');

const apiKey = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5';
const query = '12oz onion and a tomato';

axios.get('https://api.calorieninjas.com/v1/nutrition?query='+query, {
//axios.get('https://api.calorieninjas.com/v1/nutrition?query=12oz%20onion%20and%20a%20tomato', {
  headers: {
    'X-API-Key': apiKey
  }
})
.then(response => {
//  console.log(response.data);
//  console.log(response.data.items.name);
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
for (let i = 0; i < obj.items.length; i++) {
    console.log('item number:',i);
    console.log('the name is:',obj.items[i]['name']);
    console.log('the serving size in gram is',obj.items[i]['serving_size_g']);
    console.log('the total fat in grams is:',obj.items[i]['fat_total_g']);
    console.log('the total saturated fat in grams is:',obj.items[i]['fat_saturated_g']);
    console.log('the total grams of protein is:',obj.items[i]['protein_g']);
    console.log('the total grams of sodium is:',obj.items[i]['sodium_mg']);
    console.log('the total grams of potassium is:',obj.items[i]['potassium_mg']);
    console.log('the total grams of cholesterol is:',obj.items[i]['cholesterol_mg']);
    console.log('the total grams of carbohydrate is:',obj.items[i]['carbohydrates_total_g']);
    console.log('the total grams of fiber is:',obj.items[i]['fiber_g']);
    console.log('the total grams of sugar is:',obj.items[i]['sugar_g']);
    console.log('\n');
}

/*
  for (var keys in obj) {
     // console.log(keys, ':', obj[keys])
    // console.log(keys)
     for(var potato in keys) {
	  console.log(potato, ':', keys[potato])
     }
  }
  */
/*
obj.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
*/
/*
for (const key of obj) {
  console.log(`${key}: ${obj[key]}`);
}
*/
/*
  for (let [key, value] of Object.entries(response.data.items)) {
     if(key == 'name') {
      console.log(key, value);
     }
  }
*/
 ///const reply = JSON.parse(obj);  /// this is not valid json....
})
.catch(error => {
  console.error(error);
});
