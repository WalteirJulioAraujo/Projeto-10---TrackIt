import styled from 'styled-components'
import HabitDay from './HabitDay'

export default function Habit({infoHabit,setHabits}){
    return(
        <Container>
            <h1>{infoHabit.name}</h1>
            <HabitDay selectedDays={infoHabit.days} id={infoHabit.id} setHabits={setHabits}/>
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: 91px;
    h1{
        font-size:21px;
    }
`