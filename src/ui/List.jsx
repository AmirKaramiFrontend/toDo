import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
    list-style: none;
    padding: 2rem 1rem;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
`;

const List = function ({children }) {
    return <StyledList>{children}</StyledList>;
}

List.propTypes = {
    children: PropTypes.any,
}

export default List;