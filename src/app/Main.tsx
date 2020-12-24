import React from 'react';
import {Header} from './header/Header';
import {HashRouter} from 'react-router-dom';

export const Main = () => {
    return <div>
       <HashRouter>
           <Header/>
       </HashRouter>
    </div>
}