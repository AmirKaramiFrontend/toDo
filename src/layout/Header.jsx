import styled from "styled-components";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

function Header (){
    return (
        <StyledHeader>
            <Menu />
            <Logo />
        </StyledHeader>
    );
}

export default Header;