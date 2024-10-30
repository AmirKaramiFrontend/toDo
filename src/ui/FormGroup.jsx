import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const StyledFormGroup = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: ${props => props.position};
    
    &:not(:last-child){
        margin-bottom: 1.5rem;
    }
    
`;

const FormGroup = function ({children, position}){

    return <StyledFormGroup position={position}>{children}</StyledFormGroup>
}

FormGroup.propTypes = {
    children: PropTypes.any,
    position: PropTypes.string
}

export default FormGroup;