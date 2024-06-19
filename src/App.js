import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Pricing from './dropDownMenus/Pricing';

const App = () => {
    return (
        <div className="w-screen h-full flex flex-col">
            <Header/>
            <main className=" mt-8 md:mt-12 lg:mt-14 px-1 md:px-1 lg:px-8 w-full">
            <Routes>
                <Route path="/*" element ={<MainContainer/>}/>
                <Route path="/Pricing" element ={<Pricing/>}/>
            </Routes>
            </main>
        </div>
    )
}

export default App;