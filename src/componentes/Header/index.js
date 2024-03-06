import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100vw;
`
function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;