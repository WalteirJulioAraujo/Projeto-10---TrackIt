import { useState } from 'react';
import styled from 'styled-components'

export default function Days({day, dayNumber, setInfoHabitDays, infoHabitDays}){
    const [color,setColor] = useState(false);

    function SelectedDay(e){
        console.log(infoHabitDays)
        if(!infoHabitDays.includes(e)){
            setInfoHabitDays([...infoHabitDays,e]);
            setColor(true);
            
            
        }else{
            setInfoHabitDays(infoHabitDays.filter((day)=>day!==e));
            setColor(false);
        }   
    }

    return(
        <Container color={color} onClick={()=>SelectedDay(dayNumber)}>{day}</Container>
    )
}

const Container = styled.div`
    width: 30px;
    height: 30px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 4px;
    color: ${(props)=>props.color?'green':'black'};
`

