import styled from "styled-components"
import PropTypes from "prop-types"

const StyledLabel = styled.label`
    display: block;
    font-size: 1.4rem;
    color: var(--color-white);  
    margin-bottom: 1rem;
`;

const Label = function ({children}) {
    return <StyledLabel>{children}</StyledLabel>
}

Label.propTypes = {
    children: PropTypes.any
}

export default Label;