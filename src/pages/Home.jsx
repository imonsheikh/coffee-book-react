import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
// import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {

    const categories = useLoaderData()
    console.log(categories);
    

    return (
        <div>
            <h1>Home pages</h1>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading 
            title={'Browse Coffees by Category'}
            subtitle={'Choose your desired coffee category to browse through specific coffee that fit in your taste'}
            ></Heading>  

            {/* Category tab */}
            <Categories categories={categories}></Categories>

            {/* Nested dynamic components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;