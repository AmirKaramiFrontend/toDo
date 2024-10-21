import { NavLink } from "react-router-dom";
import styled from "styled-components";
import List from "./List";
import Item from "./Item";

const StyledMenu = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`;

const Menu  = function(){
    return (
        <StyledMenu>
            <List>
                <Item>
                    <NavLink to="/">Home</NavLink>
                </Item>
                <Item>
                    <NavLink to="/login">Login</NavLink>
                </Item>
                <Item>
                    <NavLink to="/register">Register</NavLink>
                </Item>
            </List>
        </StyledMenu>
    )
}

export default Menu;