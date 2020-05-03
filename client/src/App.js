import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";
import {UsersListContainer} from "./components/UsersList/UsersListContainer";
import {Context} from "./Context";
import {UserContainer} from "./components/UserPage/UserContainer";

function App() {
    const [state, setState] = useState({
        pageSize: 50,
        portionSize: 5
    });

    return (
        <Context.Provider value={{state, setState}}>

            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomePage} exact/>

                    <Route path="/users-list/:pg" component={UsersListContainer}/>
                    <Route path="/users-list">
                        <Redirect to="/users-list/1"/>
                    </Route>
                    <Route path="/user/:id" component={UserContainer}/>

                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
