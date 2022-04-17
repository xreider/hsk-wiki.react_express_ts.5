import AField from "components/containers/AField/AField";
import { ESpaces } from "constants/CssVars/ESpaces";

import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPageHero from "./heroes/AboutPageHero/AboutPageHero";
// import styles from "./styles.module.scss";

export interface PAHeroesForSections {}

const AHeroesForSections: FC<PAHeroesForSections> = () => {
  return (
    <AField marginBottom={ESpaces.bigBlock}>
      <Routes>
        <Route path="/" element={<AboutPageHero />} />
      </Routes>
    </AField>
  );
};

export default AHeroesForSections;
