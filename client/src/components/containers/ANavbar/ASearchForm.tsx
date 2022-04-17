import { FC } from "react";
import cn from "classnames";
import st from "./styles.module.scss";
import ANavItem from "./ANavItem";
import { EAIcons } from "components/elements/AIcon/AIcon";
import { useTranslation } from "react-i18next";

export interface PASearchForm {}

const ASearchForm: FC<PASearchForm> = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(st.ASearchForm_wrapper)}>
      <ANavItem el={[{ icon: EAIcons.erase }, { text: t("short.erase") }]} />
      <input className={st.ASearchForm_input} />
      <ANavItem el={[{ icon: EAIcons.search }, { text: t("short.search") }]} />
      <ANavItem
        el={[{ icon: EAIcons.manualInput }, { text: t("short.manual") }]}
      />
    </div>
  );
};

export default ASearchForm;
