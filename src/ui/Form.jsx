import styled from "styled-components";

const StyledForm = styled.form`
    width: 50rem;
    max-width: 50rem;
    padding: 2.5rem 1.5rem;
    border-radius: 2rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Form = function({children}){
      return  <StyledForm>
            {children}
        </StyledForm>;
}



export default Form;