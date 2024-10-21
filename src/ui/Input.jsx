import styled from "styled-components";
const StyledInput = styled.input`
    outline: unset;
    border-radius: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 100%;
    background-color: #fff;
    font-size: 1.4rem;
`;


const Input = function({type= 'text', disabled = false, onChange}){
    return <StyledInput type={type} disabled={disabled} onChange={onChange} />
   
}

export default Input;