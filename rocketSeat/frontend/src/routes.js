import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Box from './pages/Box';


// BrowserRoutes - Indica como as rotas vão se comportar, 
// Route - 
// Switch - Permie que apenas uma rota seja chamada por vez


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;