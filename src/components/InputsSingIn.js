import styled from 'styled-components'

export default function InputsSingIn({name,setName,password,setPassword,image,setImage,email,setEmail}){
    return(
        <Inputs>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="foto"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </Inputs>
    )
}


const Inputs = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 32px;
    input {
        width: 303px;
        height: 45px;
        background-color: #fff;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        color: black;
        display: flex;
        margin-bottom: 6px;
    }
    input::placeholder {
        font-family: "Lexend Deca", sans-serif;
    }
`;
