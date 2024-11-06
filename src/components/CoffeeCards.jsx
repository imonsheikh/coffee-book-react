import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const data = useLoaderData()
    console.log(data);
    

    // const obj = useParams()
    // const {jhankar} = useParams()
    // console.log(jhankar);

    const {category} = useParams()
    console.log(category);
    const [coffees,setCoffees] = useState([])

    useEffect(() => {
        const filteredByCategory = [...data].filter(coffee => coffee.category === category)   
        setCoffees(filteredByCategory) 
    }, [category, data])

   
    
    

    return (
        <div className='border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* cofee cartds:  {obj.category}  */}
            {/* cofee cartds:  {jhankar}  */}
            <h1 className='font-bold'>cofee cartds:  {category}</h1>

            {
                coffees.map(coffee => <Card 
                    key={coffee.id}
                    coffee={coffee}
                    ></Card>)
            } 
        </div>
    );
};

export default CoffeeCards;