import styled from "styled-components";
const StyledInput = styled.input`
    outline: unset;
    border-radius: 1rem;
    border: 1px solid #eee;
    padding: .5rem 0;
    width: 100%;
    background-color: #fff;

`;

const Input = function({type= 'text', disabled = false, onChange}){
    return <StyledInput type={type} disabled={disabled} onChange={onChange} />
}

export default Input;