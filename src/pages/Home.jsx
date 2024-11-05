import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

const Home = () => {
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
            {/* Nested components */}
        </div>
    );
};

export default Home;