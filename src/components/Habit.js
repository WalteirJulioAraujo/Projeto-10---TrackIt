import styled from 'styled-components'
import HabitDay from './HabitDay'

export default function Habit({infoHabit,setHabits,addHabit}){
    return(
        <Container>
            <h1>{infoHabit.name}</h1>
            <HabitDay selectedDays={infoHabit.days} id={infoHabit.id} setHabits={setHabits} addHabit={addHabit}/>
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: 91px;
    background-color: #fff;
    margin-bottom: 14px;
    border-radius: 5px;
    padding-top: 10px;
    padding-left:10px;

    h1{
        font-size:21px;
        margin-bottom: 10px;
    }
`