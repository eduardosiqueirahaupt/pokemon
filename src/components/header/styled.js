import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    height: 75px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,36,66,1) 41%, rgba(45,50,91,1) 100%);
    position: sticky;
    top: 0;
    z-index: 10;
`

export const TabWrapper = styled.div`
    align-self: center;
    width: 100%;
    text-align: center;
    
    a {
    text-decoration: none;
  }
`

export const Tab = styled.span`
  color: white;
  cursor: pointer;
  padding: 5px;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0px 3px 0px 3px;
  :hover {
    bottom: 2px;
    left: 1px;
    opacity: 80%;
  }
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
`

export const LogoImg = styled.img`
  position: absolute;
  height: 75px;
  margin-top: 5px;
  left: 75px;

  @media (max-width: 480px) {
    opacity: .4
  }
`