import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { guilds as mockGuilds } from "./utils/mocks";
import { Menu } from "./components/Menu";
import { Guild } from "./utils/types";
import { GuildContextProvider } from "./utils/contexts/GuildContext";
import { GuildStoreContextProvider } from "./utils/contexts/GuildStoreContext";

function App() {
  const [guild, setGuild] = React.useState<Guild | undefined>();
  const [guilds, setGuilds] = React.useState<Guild[]>([]);
  const history = useHistory();

  React.useEffect(() => {
    setGuilds(mockGuilds);
  }, []);

  return (
    <div>
      <GuildContextProvider value={{ guild, setGuild }}>
        <GuildStoreContextProvider value={{ guilds, setGuilds }}>
          <Sidebar guilds={guilds} history={history} />
          <Menu history={history} />
          <Switch>
            <Redirect path="/" exact={true} to="/dashboard" />
            <Route path="/dashboard" exact={true} component={DashboardPage} />
            <Route
              path="/dashboard/:guildId"
              exact={true}
              component={DashboardPage}
            />
            <Route
              path="/dashboard/:guildId/general"
              exact={true}
              component={DashboardPage}
            />
          </Switch>
        </GuildStoreContextProvider>
      </GuildContextProvider>
    </div>
  );
}

export default App;
