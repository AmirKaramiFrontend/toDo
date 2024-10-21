import styled from "styled-components";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
`;

function Header (){
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    )
}

export default Header;