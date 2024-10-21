import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none;
    padding: unset;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`;

const List = function ({children }) {
    return <StyledList>{children}</StyledList>;
}


export default List;