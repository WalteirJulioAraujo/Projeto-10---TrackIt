import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";
import Day from "./Day.js";
import Habit from "./Habit.js";
import Loader from "react-loader-spinner";

export default function MyHabits({ habits, addHabit, setAddHabit,setHabits, loading,setLoading }) {
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
            setLoading(true)
            request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            request.then((e)=>{
                setHabits(e.data)
                setLoading(false);
            });
            setDisabled(false);
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
                        <div className="cancel" onClick={()=>setAddHabit(false)}>Cancelar</div>
                        <div className="save" onClick={sendHabit}>Salvar</div>
                    </Buttons>
                </NewHabit>
                </>
            )}
            {!loading?<AllHabits>
                {habits.map((e)=><Habit infoHabit={e} setHabits={setHabits} addHabit={addHabit}/>)}
            </AllHabits>:<LoaderContainer><Loader type="ThreeDots" color="#00BFFF" background-color='#52b6ff' height={40} width={80} /></LoaderContainer>}
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
        width: 90%;
        display: flex;
        margin: 0 auto;
        justify-content:flex-start;
        margin-bottom: 36px;
    }
`;

const NewHabit = styled.div`
    width: 90%;
    margin: 20px auto 0 auto;
    background: #fff;
    padding-top: 18px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-radius: 5px;

    input {
        display: block;
        width: 90%;
        height: 45px;
        margin: 0 auto;
        margin-top: 18px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        font-size:19px;
        margin-bottom: 10px;
    }

    input::placeholder{
        color:#dbdbdb;
        font-size:19px;
    }
`;

const Buttons = styled.div`
    width:90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size:17px;

    .save{
        width:84px;
        height:35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        border-radius: 5px;
        color: #fff;
        margin-left: 8px;
        cursor: pointer;
    }

    .cancel{
        cursor: pointer;
        color: #52B6FF;
    }
`;


const AllHabits = styled.div`
    margin-bottom:90px;
`;


const LoaderContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 130px;

`