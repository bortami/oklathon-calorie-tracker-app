'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
    // Food item requested
    const [foodItem, setFoodItem] = useState('');
    // Array of items requested
    const [foodList, setFoodList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const axios = require('axios');

        const apiKey = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5';

        axios.get('https://api.calorieninjas.com/v1/nutrition?query=' + foodItem, {
            headers: {
                'X-API-Key': apiKey
            }
        })
            .then(response => {
                let allFoodList = foodList; // Temporary array for storing food items
                const obj = response.data;
                
                // Iterate over response object array, push to temp array
                obj.items.forEach(item => {
                    console.log("Food item name is: ", item.name);
                    allFoodList.push(item)
                });
                // Update foodList state variable with existing values, append temporary array values
                setFoodList([...foodList, allFoodList]);
                console.log("Food list contains:", foodList);
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
