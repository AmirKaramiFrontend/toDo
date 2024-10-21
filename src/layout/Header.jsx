import styled from "styled-components";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

function Header (){
    return (
        <StyledHeader>
            <Menu />
            <Logo />
        </StyledHeader>
    )
}

export default Header;