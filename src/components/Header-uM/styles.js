import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10.5rem;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 850px) {
    height: 7.4rem;
    margin-top: -47px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  /* height: 60%; */
  /* background: #f2f2f2; */
  align-items: flex-start;

  @media screen and (max-width: 850px) {
    /* display: none; */
    width: 0px;
    height: 0px;
  }
`

export const Imagem = styled.img`
  width: 70px;
  margin-left: 35px;

  @media screen and (max-width: 850px) {
    width: 0px;
    margin-left: 0px;
    /* margin-bottom: 35px; */
    display: none;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: #00cc44;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`
export const Span = styled.span`
  font-size: 0.879rem;
  margin-right: 4rem;
  font-weight: bold;
  font-family: 'Blinker';
  letter-spacing: 0.1rem;
  transition: ease 0.5s;
  width: 4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  cursor: pointer;

  &:hover {
    background: black;
    height: 3.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`
export const Menu = styled.div`
  width: 30px;
  height: 25px;
  background: yellow;
  display: none;
  border-radius: 4px;

  @media screen and (max-width: 850px) {
    display: flex;
    margin-left: 20px;
  }
`
