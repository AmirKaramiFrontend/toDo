import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
    outline: unset;
    border-radius: 1rem;
    border: 1px solid transparent;
    padding: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, .2);
    font-size: 1.4rem;
    color: var(--color-white);
    transition: all .5s !important;

    &:focus {
        border: 1px solid var(--color-warning);
    }
`;


const Input = function({type= 'text', disabled = false, onChange}){
    return <StyledInput type={type} disabled={disabled} onChange={onChange} />
}

Input.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

export default Input;