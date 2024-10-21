import { styled } from "styled-components";

const StyledFormGroup = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: ${props => props.positionText};
    
    &:not(:last-child){
        margin-bottom: 1.5rem;
    }
    
`;

const FormGroup = function ({children, positionText}){

    return <StyledFormGroup positionText={positionText}>{children}</StyledFormGroup>
}

export default FormGroup;