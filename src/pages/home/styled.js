import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100% - 50px);
  position: relative;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const WrapperCards = styled.div`
  width: 100%;
`

export const ContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-row-gap: 12px;
  grid-column-gap: 28px;
  justify-content: center;
`