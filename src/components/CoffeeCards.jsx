import React from 'react';
import { useParams } from 'react-router-dom';

const CoffeeCards = () => {

    // const obj = useParams()
    // const {jhankar} = useParams()
    // console.log(jhankar);

    const {category} = useParams()
    console.log(category);
    
    

    return (
        <div>
            {/* cofee cartds:  {obj.category}  */}
            {/* cofee cartds:  {jhankar}  */}
            cofee cartds:  {category} 
        </div>
    );
};

export default CoffeeCards;