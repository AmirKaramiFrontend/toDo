import styled from "styled-components";

const StyledForm = styled.form`
    width: 50rem;
    max-width: 50rem;
    min-height: 5rem;
    margin: auto;
    padding: 2.5rem 1.5rem;
    border-radius: 2rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
`;

const Form = function({children}){
      return  <StyledForm>
            {children}
        </StyledForm>;
}




export default Form;