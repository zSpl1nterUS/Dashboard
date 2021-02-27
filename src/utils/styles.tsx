import styled, { css } from "styled-components";

export const SidebarStyle = styled.div`
  width: 100px;
  height: 100%;
  position: fixed;
  overflow: scroll;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuStyle = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  align-items: center;
  margin-left: 100px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BasePageStyle = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  box-sizing: border-box;
  position: absolute;
  margin-left: 400px;
  width: calc(100% - 400px);
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

export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
  position: fixed;
  z-index: 10;
  background-color: inherit;
  width: 100%;
`;

export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;

export const IconStyle = styled.div`
  height: 55px;
  width: 55px;
  background-color: grey;
  border-radius: 50px;
`;

export const GuildIcon = styled(IconStyle)`
  heigth: 60px;
  width: 60px;
  margin: 5px 0px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.content};
`;

export const MenuContent = styled.div`
  box-sizing: border-box;
  padidng: ${({ theme }) => theme.padding.content};
  margin-top: 100px;
`;

export const MenuCategory = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  :nth-child(2) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 20px;
  }
`;

export const MenuCategoryItem = styled.div`
  font-size: 22px;
  font-weight: lighter;
  padding: 5px 0px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: #42494c;
    color: #ff8c1a;
  }
`;

export const DashboardContent = styled.div`
  padding: 20px;
`;

export const DropdownHeader = styled.div`
  background-color: #21262d;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const DropdownItemContainer = styled.div<any>`
  max-height: 0px;
  overflow-y: scroll;
  opacity: 0;
  transition: 0.3s;
  ${(props) =>
    props.expanded
      ? css`
          max-height: 220px;
          opacity: 1;
        `
      : css`
          max-height: 0;
          opacity: 0;
        `}
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #171717;
    border-radius: 50px;
  }
`;

export const DropdownItem = styled.div<any>`
  background-color: #21262d;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5px 20px;
  :hover {
    background-color: #545d6b;
    cursor: pointer;
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #2e2e2e;
    `}
`;

export const DropdownFooter = styled.div`
  background-color: #21262d;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Poppins";
  padding: 5px 12px;
  background-color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.1s;
  :hover {
    cursor: pointer;
    background-color: #4a4a4a;
  }

  :active {
    background-color: #262626;
  }

  :disabled {
    background-color: #919191;
    border: none;
  }
`;

export const Input = styled.input`
  font-family: "Poppins";
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4px 8px;
  border-radius: 5px;
  background-color: inherit;
  color: white;
`;
