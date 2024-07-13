import React from "react";
import durdenImage from './image/durden.jpeg';
const MainPage = () => {
    return (
        <div>
            <div>
            <img style={{height: '180px', width:'auto', margin: '100px'}} src={durdenImage} alt="Tyler Durden" />
                <h2>Tyler Durden</h2>
            </div>
        </div>
    );
};

export default MainPage;
