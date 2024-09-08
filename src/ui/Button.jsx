import styled from "styled-components"

const StyledButton = styled.button`
    transition: all .2s;
    padding: .5rem 2rem;
    border-radius: 2rem;
    border: 1px solid #eee;
    cursor: pointer;
    outline: none;
    background-color: #FCDE70;
    color: #777;

    &:hover {
        background-color: #777;
        color: #FCDE70;
    }
`;

const Button = function({children, onClick, disabled}){
   return <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>;
}

export default Button;