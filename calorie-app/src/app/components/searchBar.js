'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
    const [foodItem, setFoodItem] = useState('');
    const [foodList, setFoodList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const axios = require('axios');

        const apiKey = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5';
        // const query = '12oz onion and a tomato';

        axios.get('https://api.calorieninjas.com/v1/nutrition?query=' + foodItem, {
            headers: {
                'X-API-Key': apiKey
            }
        })
            .then(response => {
                let allFoodList = foodList;
                const obj = response.data;
                // console.log("Object keys are: ", Object.keys(obj));
                // console.log(Object.keys(obj));
                // console.log(obj.items[0]);
                // console.log(obj.items[0]['name']);
                // console.log(obj.items[0]['serving_size_g']);
                // console.log(obj.items[0]['fat_total_g']);
                // console.log(obj.items[0]['fat_saturated_g']);
                // console.log(obj.items[0]['protein_g']);
                // console.log(obj.items[0]['sodium_mg']);
                // console.log(obj.items[0]['potassium_mg']);
                // console.log(obj.items[0]['cholesterol_mg']);
                // console.log(obj.items[0]['carbohydrates_total_g']);
                // console.log(obj.items[0]['fiber_g']);
                // console.log(obj.items[0]['sugar_g']);
                obj.items.forEach(item => {
                    console.log("Food item name is: ", item.name);
                    allFoodList.push(item)
                });
                setFoodList([...foodList, allFoodList]);
                console.log("Food list contains:", foodList);
                // setFoodList(allFoodList);
                // let totalCalories = 0.0, totalFat = 0.0, totalSaturatedFat = 0.0, totalProtein = 0.0, totalSodium = 0.0, totalPotassium = 0.0, totalCholesterol = 0.0, totalCarbohydrates = 0.0, totalFiber = 0.0, totalSugar = 0.0;
                // for (let i = 0; i < obj.items.length; i++) {
                //     console.log('name: ', obj.item[i]['name'])
                //     totalCalories = totalCalories + obj.items[i]['calories'];
                //     totalFat = totalFat + obj.items[i]['fat_total_g'];
                //     totalSaturatedFat = totalSaturatedFat + obj.items[i]['fat_saturated_g']
                //     totalProtein = totalProtein + obj.items[i]['protein_g'];
                //     totalSodium = totalSodium + obj.items[i]['sodium_mg'];
                //     totalPotassium = totalPotassium + obj.items[i]['potassium_mg'];
                //     totalCholesterol = totalCholesterol + obj.items[i]['cholesterol_mg'];
                //     totalCarbohydrates = totalCarbohydrates + obj.items[i]['carbohydrates_total_g'];
                //     totalFiber = totalFiber + obj.items[i]['fiber_g'];
                //     console.log('the total grams of sugar is:', obj.items[i]['sugar_g']);
                //     totalSugar = totalSugar + obj.items[i]['sugar_g'];
                //     console.log('\n');
                // }

            })
            .catch(error => {
                console.log('Errored')
                console.error(error);
            });
    };

    return (
        <>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <form onSubmit={handleSubmit}>
                    <Input id="foodItem" type="foodItem" placeholder="" onChange={(e) => setFoodItem(e.target.value)} />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>

            <div>
                <h2> List goes here </h2>
                <ul>
                    <li> Test list item </li>
                    {foodList.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
