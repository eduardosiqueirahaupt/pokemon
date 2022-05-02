import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 150px;
  height: 170px;
  background: rgb(156,142,74);
  background: radial-gradient(circle, rgba(156,142,74,1) 45%, rgba(253,219,45,1) 93%);
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`

export const Title = styled.div`
  height: 35px;
  font-family: cursive;
  font-size: 17px;
  padding-left: 10px;
  text-transform: capitalize;
  margin-top: 5px;
 `

export const ImgWrapper = styled.div`
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
`

export const FavImg = styled.img`
  position: relative;
  height: 30px;
  left: calc(100% - 50px);
  padding: 5px;
  top: -10px;
  z-index: 2;
`