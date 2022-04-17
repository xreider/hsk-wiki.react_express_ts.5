import { FC } from "react";
import { useTranslation } from "react-i18next";

import AHeroForSection from "components/containers/AHero/extend/AHeroForSection";
import AField from "components/containers/AField/AField";

import st from "./styles.module.scss";

import HSKWiKi from "./assets/HSK.WiKi2.png";
import 東 from "./assets/Dong1.png";
import Title_en from "./assets/Title_en2.png";
import Title_ru from "./assets/Title_ru2.png";
import Title_zh from "./assets/Title_zh2.png";
import { ELangsOfInterface } from "constants/common/languages";
import { EFieldColorCN } from "constants/common/colors";
import { ESpaces } from "constants/CssVars/ESpaces";

export interface PAboutPageHero {}

const AboutPageHero: FC<PAboutPageHero> = () => {
  const { i18n } = useTranslation();

  return (
    <AHeroForSection
      className={st.wrapper}
      aNavbarProps={{ onDesktopTopClassName: EFieldColorCN.alwaysDark }}
      size="fullWidth"
      marginBottom={ESpaces.big}
    >
      <div className={st.Dong_container}>
        <img className={st.Dong} src={東} alt="東" />
      </div>
      <div className={st.HSKWiKi_container}>
        <img className={st.HSKWiKi} src={HSKWiKi} alt="HSK.WiKi" />
      </div>
      {/* <AField>
          <ABtn
            kind="outline"
            color={EElColors.primary}
            hoverEffect={EHoverEffectsPC.upSlightlyFull}
            text={t(`actions.startLearning`)}
            onClick={replaceSignUp}
          />
        </AField> */}
      <div className={st.text}>
        <img
          className={st.textImg}
          src={getImgTitle(i18n.language)}
          alt="Modern tools for learning Chinese"
        />
      </div>
    </AHeroForSection>
  );
};

export default AboutPageHero;

function getImgTitle(lang: string) {
  switch (lang) {
    case ELangsOfInterface.ru:
      return Title_ru;
    case ELangsOfInterface.zh:
      return Title_zh;
    default:
      return Title_en;
  }
}
