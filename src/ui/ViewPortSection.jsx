import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledViewPortSection = styled.section`
     height: 100vh;
     padding: 5rem 3.5rem;
     background-image: url("./public/pattern-2.webp");
`;  

const ViewPortSection = function({ children }){
    return <StyledViewPortSection>{children}</StyledViewPortSection>
}

ViewPortSection.propTypes = {
    children: PropTypes.any
}

export default ViewPortSection;