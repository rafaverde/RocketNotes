import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`

export const NoteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 12px;
  }
`
