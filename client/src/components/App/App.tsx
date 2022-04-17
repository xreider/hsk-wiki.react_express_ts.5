import { FC } from "react";
import cn from "classnames";
import st from "./styles.module.scss";
import ANavbar from "components/containers/ANavbar/ANavbar";
import useInitDevice from "hooks/init/useInitDevice";
import AHeroesForSections from "components/sections/AHeroesForSections/AHeroesForSections";
import AHeroWithNotifications from "components/sections/AHeroWithNotifications/AHeroWithNotifications";
import { Route, Routes } from "react-router-dom";

export interface PApp {}

const App: FC<PApp> = () => {
  useInitDevice();
  return (
    <div className={cn(st.PApp_wrapper)}>
      <ANavbar />
      <AHeroesForSections />
      <AHeroWithNotifications />
      <Routes>
        <Route path="/" element={<div>AboutPage</div>} />
      </Routes>
    </div>
  );
};

export default App;
