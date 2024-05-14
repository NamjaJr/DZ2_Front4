import React from 'react';
import About from "../../components/About/About";
import Title from "../../components/Title/Title";

const MainPage = () => {
    return (
        <div>
            <About info={{body:'status',title:'title'}}/>
            <Title word={'Hello world'}/>

        </div>
    );
};

export default MainPage;