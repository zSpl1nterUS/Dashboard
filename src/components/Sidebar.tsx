import * as React from "react";
import {
  IconStyle,
  SidebarContent,
  SidebarHeader,
  SidebarStyle,
  GuildIcon,
} from "../utils/styles";
import { Guild } from "../utils/types";
import { History } from "history";
import { GuildContext } from "../utils/contexts/GuildContext";

type SidebarProps = {
  guilds: any[];
  history: History;
};

export const Sidebar = (props: SidebarProps) => {
  const { guild, setGuild } = React.useContext(GuildContext);
  console.log(guild, setGuild);
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        {props.guilds.map((guild) => (
          <GuildIcon
            key={guild.id}
            onClick={() => {
              setGuild(guild);
              props.history.push(`/dashboard/${guild.id}`);
            }}
          />
        ))}
      </SidebarContent>
    </SidebarStyle>
  );
};
