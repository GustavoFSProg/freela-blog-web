import { HeaderContainer, Span, LinksContainer, LogoContainer } from './styles'
// import Logo from '../../assets/logo.jpg'
import Menu from '../Menu/menu'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        {/* <Imagem src={Logo} alt="logo" /> */}

      </LogoContainer>
      <LinksContainer>
        <Menu />
        <Link to="/"> <Span>HOME </Span></Link>
        <Link to="/register"> <Span>CADASTRO </Span></Link>
        <Span>TRADUÇÃO</Span>
        <Span>CONTATO</Span>
        <Span>FORMAÇÃO</Span>
        <Span>ALEMÃO</Span>
        <Span>SERVIÇOS</Span>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header
