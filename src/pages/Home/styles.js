import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 24px;
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 60px 0;

  > li {
    margin-bottom: 24px;
    text-align: center;
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 40px 60px 0;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 60px;
  overflow-y: auto;
`

export const NewNotes = styled.button`
  grid-area: newnote;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }

  > span {
    font-size: 18px;
  }
`
