import { styled } from "styled-components";

const StyledFormGroup = styled.div`
    width: 100%;
    padding: 1rem;
    
    &:not(:last-child){
        margin-bottom: 1.5rem;
    }
    
`;

const FormGroup = function ({children}){

    return <StyledFormGroup >{children}</StyledFormGroup>
}

export default FormGroup;