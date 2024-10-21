import { styled } from 'styled-components';

const StyledHeader = styled.div`
    font-size: ${props => props.as === 'h1' ? '3.5rem':props.as === 'h2' ? '2.5rem':'2rem'};
    font-weight: ${props => props.as === 'h1' ? '900':props.as === 'h2' ? '700':'400'};
`;



const Heading = function({ children, as }){
    return <StyledHeader as={as}>{children}</StyledHeader>
}


export default Heading;