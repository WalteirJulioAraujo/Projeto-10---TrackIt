import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import Habits from "./Habits";
import TodayHabits from "./TodayHabits";
import History from "./History";
import HabitContext from "../contexts/HabitContext"
import CompĺeteContext from "../contexts/CompleteContext"

import GlobalStyle from "../styles/GlobalStyle";
import UserContext from '../contexts/UserContext';


export default function App(){
    const [user, setUser] = useState(undefined);
    const [todayHabits, setTodayHabits] = useState([]);
    const [ completeTask, setCompleteTask ] = useState(0);
    
    return(
        <>
        <CompĺeteContext.Provider value={{completeTask, setCompleteTask}}>
        <HabitContext.Provider value={{todayHabits, setTodayHabits}}>
        <UserContext.Provider value={{user, setUser}}>
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
                        <TodayHabits todayHabits={todayHabits} setTodayHabits={setTodayHabits}/>
                    </Route>
                    <Route path="/historico" exact>
                        <History />
                    </Route>
                </Switch>
            </BrowserRouter>
            <GlobalStyle user={user}/>
        </UserContext.Provider >
        </HabitContext.Provider>
        </CompĺeteContext.Provider>
        </>
    )
}