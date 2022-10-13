import styled from 'styled-components'

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
    /* margin-left: -80px; */
  }
`

export const ContainerComents = styled.div`
width: 38%;
  @media screen and (max-width: 700px) {
    width: 70%;
    margin-left: -50px;

  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 135%;
    margin-left: -5px;
  }
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 700px) {
    margin-left: -25px;
    width: 84%;
    margin-left: -25px;
  }
`
export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 700px) {
    /* margin-left: 125px; */
    /* width: 100rem; */
    /* margin-left: -85px; */
    width: 100%;
  }
`

export const EditButton = styled.button`
  margin-left: 380px;
  background: #d9d9d9;
  height: auto;
  border-radius: 6px;
  padding-top: 5px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 5px;
  font-size: 12px;
  font-family: Arial;
  font-weight: bolder;
  color: #334d4d;

  @media screen and (max-width: 700px){
  margin-left: 130px;

  }
`
