import styled from "styled-components";

const StyledItem = styled.li`
    padding: .5rem 0;
    text-align: center;
    width: 100%;
    &:not(:last-child){
        margin-bottom: .5rem;
        border-bottom: 1px solid #ccc;
    }

    &:first-child {
        font-weight: bold;
        font-size: 2rem;
    }
`;

const Item = function({children, type}){
    return <StyledItem type={type}>{children}</StyledItem>;
}

Item.propTypes = {
    children: Element || String,
    type: String
};

export default Item;