import { Component } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none;
    background-color: #f1f1f1;
    border: 1px solid #eee;
    padding: unset;
    width: 10rem;
`;

const List = function ({children}) {
    return <StyledList>{children}</StyledList>;
}


export default List;