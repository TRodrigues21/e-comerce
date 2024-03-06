import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    height: auto;
    width: 100px;
    margin-left: 40px;
    cursor: pointer;
`
function Logo() {
    return(
        <LogoContainer>
          <LogoImage src={logo} 
          alt='Logo do site' 
          className='logo-img'/>
        </LogoContainer>
    )
}

export default Logo;