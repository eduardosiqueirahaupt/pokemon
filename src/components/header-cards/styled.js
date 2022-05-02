import styled from 'styled-components'
import searchImg from '../../images/search.png'

export const Wrapper = styled.div`
    height: 35px;
    display: flex;
    padding: 10px 10px 20px 35px;
    position: sticky;
    top: 50px;
    z-index: 10;
    background: rgb(2, 0, 36);
    background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(32, 36, 66, 1) 41%,
    rgba(45, 50, 91, 1) 100%
  );
`

export const Input = styled.input`
  width: 300px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url(${searchImg});
  background-position: 10px 6px;
  background-size: 18px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
  height: 35px;
`