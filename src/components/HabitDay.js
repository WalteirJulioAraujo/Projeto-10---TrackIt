import axios from 'axios';
import { useContext } from 'react';
import styled from 'styled-components'
import UserContext from '../contexts/UserContext';

export default function HabitDay({selectedDays, id, setHabits}){
    console.log(selectedDays);
    const { user } = useContext(UserContext);

    const days = [
        { dayName: "D", dayNumber: 0 },
        { dayName: "S", dayNumber: 1 },
        { dayName: "T", dayNumber: 2 },
        { dayName: "Q", dayNumber: 3 },
        { dayName: "Q", dayNumber: 4 },
        { dayName: "S", dayNumber: 5 },
        { dayName: "S", dayNumber: 6 },
    ];

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function DeleteHabit(id){
        if(!window.confirm("Deseja deletar esse hábito?")){
            return
        }
        let request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
        request.then(()=>{
            console.log('consegui deletar')
            request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
            request.then((e)=>setHabits(e.data));
        })
        request.catch(()=>console.log('não consegui deletar'))

    }


    return(
        <Days>
            {days.map((e)=>{
                if(selectedDays.includes(e.dayNumber)){
                    return(<DayContainerSelected>{e.dayName}</DayContainerSelected>)
                }else{
                    return(<DayContainer>{e.dayName}</DayContainer>)
                }
            })}
            <button onClick={()=>DeleteHabit(id)}>Deletar</button>
        </Days>
    )
}

const Days =  styled.div`
    display: flex;

    
`


const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 4px;
    background-color: red;

    &:hover{
        cursor:pointer;
    }

`
const DayContainerSelected = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 4px;
    background-color: green;

    &:hover{
        cursor:pointer;
    }
`
