import PropTypes from "prop-types";
import { styled } from 'styled-components';

const StyledHeader = styled.div`
    font-size: ${props => props.as === 'h1' ? '3.5rem':props.as === 'h2' ? '2.5rem':'2rem'};
    font-weight: ${props => props.as === 'h1' ? '900':props.as === 'h2' ? '700':'400'};
    color: var(--color-white);
`;



const Heading = function({ children, as }){
    return <StyledHeader as={as}>{children}</StyledHeader>
}

Heading.propTypes = {
    children: PropTypes.string,
    as: PropTypes.string
}


export default Heading;