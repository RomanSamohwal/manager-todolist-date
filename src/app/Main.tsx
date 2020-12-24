import React from 'react';
import {HeaderComponent} from './header/HeaderComponent';
import {HashRouter} from 'react-router-dom';

export const Main = () => {
    return <div>
        <HashRouter>
            <HeaderComponent/>
        </HashRouter>
    </div>
}