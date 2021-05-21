import { useState } from 'react';
import styled from 'styled-components'

export default function Day({day, dayNumber, setInfoHabitDays, infoHabitDays, disabled}){
   
    function SelectedDay(e){
        console.log(infoHabitDays)
        if(!infoHabitDays.includes(e)){
            setInfoHabitDays([...infoHabitDays,e]);

        }else{
            setInfoHabitDays(infoHabitDays.filter((day)=>day!==e));
        }   
    }

    return(
        <Container dayNumber={dayNumber} infoHabitDays={infoHabitDays} onClick={!disabled?()=>SelectedDay(dayNumber):""}>{day}</Container>
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
    color: ${(props)=>props.infoHabitDays.includes(props.dayNumber)?'green':'black'};

    &:hover{
        cursor:pointer;
    }
`

