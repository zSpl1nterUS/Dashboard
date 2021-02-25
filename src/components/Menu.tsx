import * as React from "react";
import { menuItems } from "../utils/constants";
import {
  MenuCategory,
  MenuCategoryItem,
  MenuContent,
  MenuHeader,
  MenuStyle,
} from "../utils/styles";

type MenuProps = {};

export const Menu = (props: MenuProps) => {
  return (
    <MenuStyle>
      <MenuHeader>
        <span>Discord Bot Dashboard</span>
      </MenuHeader>
      <MenuContent>
        {menuItems("123").map((item) => (
          <MenuCategory key={item.name}>
            <span>{item.name}</span>
            {item.routes.map((route) => (
              <MenuCategoryItem key={route.name}>
                <span># ${route.name}</span>
              </MenuCategoryItem>
            ))}
          </MenuCategory>
        ))}
      </MenuContent>
    </MenuStyle>
  );
};
