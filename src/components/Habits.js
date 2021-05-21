import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import UserContext from "../contexts/UserContext"
import Footer from './Footer';
import Header from './Header';
import MyHabits from './MyHabits'
import styled from 'styled-components'

export default function Habits(){
    const { user } = useContext(UserContext);
    const [habits, setHabits] =useState([]);
    const [addHabit, setAddHabit] = useState(false);

    console.log(user);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    console.log(config);
    useEffect(()=>{
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
        request.then((e)=>{
            setHabits(e.data)
            console.log("peguei a array com os habitos - history page")
        })
        request.catch(()=>{
            console.log("erro ao pegar  array com os habitos - history page")
        })
    },[])


    return (
        <>
        <Header image={ user.image }/>
        <Title>
            <span>Meus Hábitos</span>
            <button onClick={()=>addHabit?setAddHabit(false):setAddHabit(true)}>+</button>
        </Title>
        <MyHabits habits={habits} addHabit={addHabit} setAddHabit={setAddHabit} setHabits={setHabits}/>
        <Footer />
        </>
    )
}

const Title =  styled.div`
    color:#126BA5;
    display: flex;
    justify-content: space-between;
    margin-top: 110px;
    width: 90%;
    margin: 110px auto 0 auto;

    span{
        font-size: 23px;
    }
    button{
        background-color: #126BA5;
        color: #fff;
        font-size: 26px;
        width: 40px;
    }

`