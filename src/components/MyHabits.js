import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";
import Day from "./Day.js";

export default function MyHabits({ habits, addHabit, setAddHabit }) {
    const [infoHabitName, setInfoHabitName] = useState("");
    const [infoHabitDays, setInfoHabitDays] = useState([]);
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
    console.log(infoHabitName);

    function sendHabit() {
        const request = axios.post(
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
        request.then((e)=>console.log(e.data))
        request.catch(()=>console.log("habito nao foi enviado"))
    }

    return (
        <Content>
            {habits.length || (
                <span>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                </span>
            )}
            {addHabit && (
                <NewHabit>
                    <input
                        placeholder="nome do hábito"
                        onChange={(e) => setInfoHabitName(e.target.value)}
                        value={infoHabitName}
                    />
                    <div className="dias">
                        {days.map((e) => (
                            <Day
                                day={e.dayName}
                                dayNumber={e.dayNumber}
                                setInfoHabitDays={setInfoHabitDays}
                                infoHabitDays={infoHabitDays}
                            />
                        ))}
                    </div>
                    <Buttons>
                        <button>Cancelar</button>
                        <button onClick={sendHabit}>Salvar</button>
                    </Buttons>
                </NewHabit>
            )}
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
