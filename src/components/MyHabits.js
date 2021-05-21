import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";
import Day from "./Day.js";
import Habit from "./Habit.js";

export default function MyHabits({ habits, addHabit, setAddHabit,setHabits }) {
    const [infoHabitName, setInfoHabitName] = useState("");
    const [infoHabitDays, setInfoHabitDays] = useState([]);
    const { user } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);

    const days = [
        { dayName: "D", dayNumber: 0 },
        { dayName: "S", dayNumber: 1 },
        { dayName: "T", dayNumber: 2 },
        { dayName: "Q", dayNumber: 3 },
        { dayName: "Q", dayNumber: 4 },
        { dayName: "S", dayNumber: 5 },
        { dayName: "S", dayNumber: 6 },
    ];
    console.log(infoHabitName);

    function sendHabit() {
        setDisabled(true);
        let request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                name: infoHabitName,
                days: infoHabitDays,
            },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );
        request.then((e)=>{
            console.log(e.data)
            setAddHabit(false);
            setInfoHabitName("");
            setInfoHabitDays([]);
            request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            request.then((e)=>setHabits(e.data));
        })
        request.catch(()=>{
            console.log("habito nao foi enviado");
            alert("erro ao enviar o habito");
            setDisabled(false);
        })
    }

    return (
        <Content>
            {habits.length==0?<span>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                </span>:""}
            {addHabit && (
                <>
                <NewHabit>
                    <input
                        placeholder="Nome do hábito"
                        onChange={(e) => setInfoHabitName(e.target.value)}
                        value={infoHabitName}
                        disabled={disabled}
                    />
                    <div className="dias">
                        {days.map((e) => (
                            <Day
                                day={e.dayName}
                                dayNumber={e.dayNumber}
                                setInfoHabitDays={setInfoHabitDays}
                                infoHabitDays={infoHabitDays}
                                disabled={disabled}
                            />
                        ))}
                    </div>
                    <Buttons>
                        <button onClick={()=>setAddHabit(false)}>Cancelar</button>
                        <button onClick={sendHabit}>Salvar</button>
                    </Buttons>
                </NewHabit>
                </>
            )}
            <AllHabits>
                {habits.map((e)=><Habit infoHabit={e} setHabits={setHabits}/>)}
            </AllHabits>
        </Content>
    );
}

const Content = styled.div`
    width: 90%;
    margin: 28px auto 0 auto;

    span {
        font-size: 18px;
        color: #666666;
    }

    .dias {
        width: fit-content;
        display: flex;
        margin: 0 auto;
    }
`;

const NewHabit = styled.div`
    width: 90%;
    margin: 20px auto 0 auto;
    background: #e5e5e5;

    input {
        display: block;
        width: 90%;
        margin: 0 auto;
        margin-top: 18px;
    }
`;

const Buttons = styled.div``;


const AllHabits = styled.div`
    margin-bottom:90px;
`;