import styled from 'styled-components'

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px){
        width: 160%;
        margin-left: -80px;

  }
`

export const ContainerComents = styled.div`

  @media screen and (max-width: 700px){
        width: 170%;
        margin-left: -50px;

  }
`

export const ContainerForm = styled.div`
 display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px){
        width: 135%;
        margin-left: -25px;


  }
`
