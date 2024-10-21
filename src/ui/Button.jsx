import styled from "styled-components"

const backgroundColors = {
    primary: 'var(--color-primary)',
    warning: 'var(--color-warning)',
    primaryHover: 'var(--color-primary-dark)',
    warningHover: 'var(--color-warning-dark)',
}

const colors = {
    primary: 'var(--color-white)',
    warning: 'var(--color-dark)'
}

const size = {
    small: '.5rem 1.5rem',
    medium: '.75rem 2.5rem',
    large: '1.25rem 3.5rem'
}

const StyledButton = styled.button`
    transition: all .2s;
    padding: ${props => size[props.size]};
    border-radius: 2rem;
    border: 1px solid #eee;
    cursor: pointer;
    outline: none;
    background-color: ${props => backgroundColors[props.type]};
    color: ${props => colors[props.type]};
    transition: var(--all-transition);
   

    &:hover {
        background-color: ${props => backgroundColors[`${props.type}Hover`]};
        color: ${props => colors[`${props.type}Hover`]};
    }
`;

const Button = function({children, onClick, disabled , type, size}){
   return <StyledButton onClick={onClick} disabled={disabled} type={type} size={size}>{children}</StyledButton>;
}

export default Button;