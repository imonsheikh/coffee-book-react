/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { removeFavorite } from '../utils';


const Card = ({coffee, handleRemove}) => {
    console.log(coffee);
        // const location = useLocation()
        // console.log(location);
        const {pathname} = useLocation()
        console.log(pathname);


    const {name,image,category,origin,type,id,rating,popularity} = coffee || {}

    return (
        <div className='flex relative rounded-2xl border '>
            <Link
            to={`/coffee/${id}`}
            className='transition hover:scale-105 shadow-xl rounded-md overflow-hidden w-full '
            >
                <figure className=' h-48 overflow-hidden'>
                    <img className='' src={image} alt="image" />
                </figure>
                <div className='p-4'>
                   <h1 className='text-xl'>Name: {name}</h1>
                   <p>Category: {category}</p>
                   <p>Type: {type}</p>
                   <p>Origin: {origin}</p>
                   <p>Rating: {rating}</p>
                   <p>Popular: {popularity}</p>
                </div>
            
            </Link>

            {
                pathname === '/dashboard' && 
                <div 
                // onClick={() => removeFavorite(id)}
                onClick={() => handleRemove(id)}
                className='absolute -top-5 -right-5 bg-warning p-3 rounded-full cursor-pointer'><FaTrashAlt size={20} /></div>
            }
        </div>
    );
};

export default Card;