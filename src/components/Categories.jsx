import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
         
        {
            categories.map(category => 
               <Link
            // key={category.id}
               key={category.category}
               to={`/category/${category.category}`} 
               role="tab" className="tab">{category.category}</Link>
               
           )
        }

       {/* <Link role="tab" className="tab tab-active">Tab 2</Link>
       <Link role="tab" className="tab">Tab 3</Link> */}
   </div>
    );
};

export default Categories;