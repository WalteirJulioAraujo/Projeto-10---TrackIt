import axios from 'axios';
import { useContext } from 'react';
import styled from 'styled-components'
import UserContext from '../contexts/UserContext';
import { TrashBinOutline } from 'react-ionicons'

export default function HabitDay({selectedDays, id, setHabits,addHabit}){
    
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
            
            request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
            request.then((e)=>setHabits(e.data));
        })
        request.catch(()=>alert('Não foi possível deletar o hábito, tente novamente'))

    }


    return(
        <Days>
            {days.map((e)=>{
                if(selectedDays.includes(e.dayNumber)){
                    return(<DayContainerSelected addHabit={addHabit}>{e.dayName}</DayContainerSelected>)
                }else{
                    return(<DayContainer addHabit={addHabit}>{e.dayName}</DayContainer>)
                }
            })}
            <TrashBinOutline
                color={'#870d0d'} 
                height="28px"
                width="23px"
                onClick={()=>DeleteHabit(id)}
                className='Icon'
            />
        </Days>
    )
}

const Days =  styled.div`
    display: flex;

    .Icon{
        cursor:pointer;
        margin-left: 15px;
    }
`


const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 4px;
    background-color: #fff;
    color: #CFCFCF;

    &:hover{
        cursor:default
    }

`
const DayContainerSelected = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 4px;
    color: #fff;
    background-color: #CFCFCF;

    &:hover{
        cursor: default
    }
`
