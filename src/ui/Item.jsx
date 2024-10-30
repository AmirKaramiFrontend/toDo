import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItem = styled.li`
    padding: .5rem 0;
    text-align: center;   
    font-size: var(--medium-font);
    color: var(--color-white);
    font-weight: 100;
    letter-spacing: 2px;

    a.active {
        color: var(--color-warning);
    }
`;

const Item = function({children}){
    return <StyledItem>{children}</StyledItem>;
}

Item.propTypes = {
    children: PropTypes.any,
}


export default Item;