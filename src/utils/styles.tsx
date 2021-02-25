import styled from "styled-components";

export const SidebarStyle = styled.div`
  width: 100px;
  height: 100%;
  position: fixed;
  overflow: scroll;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main}
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const SidebarHeader = styled(BaseHeader)`
  justify-content: center;
`;

export const IconStyle = styled.div`
  height: 55px;
  width: 55px;
  background-color: grey;
  border-radius: 50px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.content};
`;

export const GuildIcon = styled(IconStyle)`
  heigth: 60px;
  width: 60px;
  margin: 5px 0px;
`;
