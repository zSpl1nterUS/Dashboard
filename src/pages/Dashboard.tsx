import * as React from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildStoreContext } from "../utils/contexts/GuildStoreContext";
import { BasePageStyle, DashboardHeader } from "../utils/styles";

export const DashboardPage = (props: any) => {
  const { guildId } = props.match.params;
  const { guild, setGuild } = React.useContext(GuildContext);
  const { guilds } = React.useContext(GuildStoreContext);

  React.useEffect(() => {
    const findGuild = guilds.find((g) => g.id === guildId);
    setGuild(findGuild);
  });

  if (!guild)
    return (
      <BasePageStyle>
        <DashboardHeader>Selecione um Servidor Primeiro</DashboardHeader>
      </BasePageStyle>
    );
  return (
    <BasePageStyle>
      <DashboardHeader>Dashboard</DashboardHeader>
    </BasePageStyle>
  );
};
