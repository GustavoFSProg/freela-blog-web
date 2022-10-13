import styled from 'styled-components'

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    width: 100%;
    /* margin-left: -80px; */
  }
`

export const ContainerComents = styled.div`
  width: 38%;
  @media screen and (max-width: 700px) {
    width: 70%;
    /* margin-left: -50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 120%;
    /* margin-left: 10px; */
    display: flex;

    /* margin-left: -5px; */
  }
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 84%;
    /* margin-left: -25px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  @media screen and (max-width: 700px) {
    margin-left: 190px;
  }
`
export const VideoContainer = styled.div`
  width: 35%;

  @media screen and (max-width: 700px) {
    margin-left: -180px;
  }
`

export const ContainerFormUpdate = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
     align-items: center;
    justify-content: center;

  @media screen and (max-width: 700px) {
    width: 98%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;


  @media screen and (max-width: 700px) {
    width: 87%;
    display: flex;
     /* align-items: center; */
    justify-content: center;

  }
`