import * as React from "react";
import {
  IconStyle,
  SidebarContent,
  SidebarHeader,
  SidebarStyle,
  GuildIcon
} from "../utils/styles";
import { Guild } from "../utils/types";

type SidebarProps = {
  guilds: any[];
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
          {props.guilds.map((guild) => (
              <GuildIcon key={guild.id} />
          ))}
      </SidebarContent>
    </SidebarStyle>
  );
};
