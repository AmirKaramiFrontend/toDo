import styled from "styled-components";

const StyledItem = styled.li`
    padding: .5rem 0;
    text-align: center;   
    font-size: var(--medium-font);
`;

const Item = function({children}){
    return <StyledItem>{children}</StyledItem>;
}

export default Item;