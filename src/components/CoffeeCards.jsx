import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {

    const navigate = useNavigate()

    const data = useLoaderData()
    // console.log(data);
    // const obj = useParams()
    // const {jhankar} = useParams()
    // console.log(jhankar);

    const {category} = useParams()
    console.log(category);
    const [coffees,setCoffees] = useState([])
    
    useEffect(() => {
        if(category){
           console.log(typeof category);
        const filteredByCategory = [...data].filter(coffee => coffee.category === category)   
        setCoffees(filteredByCategory) 
       }else{
        setCoffees(data.slice(0,6))
       }
    }, [category, data])

   
    
    

    return (
       <>
        <div className='border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {/* cofee cartds:  {obj.category}  */}
            {/* cofee cartds:  {jhankar}  */}
          

            {
                coffees.map(coffee => <Card 
                    key={coffee.id}
                    coffee={coffee}
                    ></Card>)
            } 
        </div>
        <button 
        className='btn btn-warning'
        // onClick={() => setCoffees(data)} 
        onClick={() => navigate('/coffees')}

        >View All</button>
       </>
    );
};

export default CoffeeCards;