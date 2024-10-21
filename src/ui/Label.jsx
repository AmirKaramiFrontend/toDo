import styled from "styled-components"

const StyledLabel = styled.label`
    display: block;
    font-size: 1.4rem;
    color: #777;  
`;

const Label = function ({children}) {
    return <StyledLabel>{children}</StyledLabel>
}

export default Label;