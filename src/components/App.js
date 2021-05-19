import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import Habits from "./Habits";
import TodayHabits from "./TodayHabits";
import History from "./History";

import GlobalStyle from "../styles/GlobalStyle";

export default function App(){
    const [user, setUser] = useState({});
    
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <LogIn />
                    </Route>
                    <Route path="/cadastro" exact>
                        <SignIn />
                    </Route>
                    <Route path="/habitos" exact>
                        <Habits />
                    </Route>
                    <Route path="/hoje" exact>
                        <TodayHabits />
                    </Route>
                    <Route path="/historico" exact>
                        <History />
                    </Route>
                </Switch>
            </BrowserRouter>
            <GlobalStyle />
        </>
    )
}