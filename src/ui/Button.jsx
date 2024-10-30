import styled from "styled-components";
import PropTypes from "prop-types";

const backgroundColors = {
    primary: 'var(--color-primary)',
    warning: 'var(--color-warning)',
    primaryHover: 'var(--color-primary-dark)',
    warningHover: 'var(--color-warning-dark)',
}

const colors = {
    primary: 'var(--color-white)',
    warning: 'var(--color-black)'
}

const size = {
    small: '.5rem 1.5rem',
    medium: '.75rem 2.5rem',
    large: '1.25rem 3.5rem'
}

const letterSpace = {
    small: '1px',
    medium: '2px',
    large: '3px'
}

const StyledButton = styled.button`
    transition: all .2s;
    padding: ${props => size[props.size]};
    border-radius: 2rem;
    border: unset;
    cursor: pointer;
    outline: none;
    background-color: ${props => backgroundColors[props.type]};
    color: ${props => colors[props.type]};
    transition: var(--all-transition);
    letter-spacing: ${props => letterSpace[props.space]};

    &:hover {
        background-color: ${props => backgroundColors[`${props.type}Hover`]};
        color: ${props => colors[`${props.type}Hover`]};
    }
`;

const Button = function({children, onClick, disabled , type, size, space}){
   return <StyledButton onClick={onClick} disabled={disabled} type={type} size={size} space={space}>{children}</StyledButton>;
}

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.string,
    space: PropTypes.string
}

export default Button;