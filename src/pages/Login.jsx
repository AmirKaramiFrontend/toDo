import { Form } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled(Form)`
    max-width: 35rem;
    height: auto;
    background-color: var(--color-light-grey);
    margin: 20rem auto;
`;

const Login = function(){
    return <StyledForm>
    </StyledForm>
}

export default Login;