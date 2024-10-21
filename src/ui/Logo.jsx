import styled from "styled-components";

const StyledLogo = styled.img`
    width: 5rem;
    height: auto;
`

const Logo = function(){
    return <StyledLogo src="./public/logo.webp" alt="website logo" />
}

export default Logo;