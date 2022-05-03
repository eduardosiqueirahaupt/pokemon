import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  margin: 20px auto;

  .disabled {
    color: grey;
    pointer-events: none;
  }

`

export const Arrow = styled.span`
  color: rgb(253,219,45);
  cursor: pointer;
  font-size: 40px;
`
