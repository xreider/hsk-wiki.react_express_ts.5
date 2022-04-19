import { FC, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import st from "./styles.module.scss";
import { EFieldColorCN } from "constants/common/colors";
import { EAIcons } from "components/elements/AIcon/AIcon";
import ANavItem from "./ANavItem";
import ASearchForm from "./ASearchForm";
import { useStoreANavbar } from "stores/useStoreANavbar";

export interface PANavbar {}

export enum EScrollDir {
  up = "up",
  down = "down",
}

const ANavbar: FC<PANavbar> = () => {
  const { t } = useTranslation();
  const {
    // propsANavbar: { onDesktopTopStyle },
    propsANavbar: { onDesktopTopClassName },
  } = useStoreANavbar();
  // const scrollDir = useScrollDirection();
  const [currPos, setCurrPos] = useState(0);
  const [dir, setDir] = useState(EScrollDir.up);
  const [positionAbsolute, setPositionAbsolute] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      setDir(currPos.y - prevPos.y < 0 ? EScrollDir.down : EScrollDir.up);
      setCurrPos(Math.abs(currPos.y));
      setPositionAbsolute(currPos.y === 0);
    },
    [],
    undefined,
    false,
    300
  );

  return (
    <div
      className={cn(
        st.ANavbar_wrapper,
        EFieldColorCN.dark,
        onDesktopTopClassName,
        onDesktopTopClassName && st["transparentBG"],
        positionAbsolute && st["positionAbsolute"],
        ((!positionAbsolute && dir === EScrollDir.up) || currPos >= 90) &&
          st["fixed"],
        dir === EScrollDir.down && currPos >= 90 && st["hide"]
        // currPos === 0 && st["closeToTop"]
      )}
    >
      <div className={cn(st.ANavbar_panel)}>
        <ANavItem el={[{ icon: EAIcons.brand }]} wideFont />
        <ANavItem
          el={[{ icon: EAIcons.language }, { text: t("short.language") }]}
        />
        {/* <ANavFiller /> */}
        <ASearchForm />
        <ANavItem el={[{ icon: EAIcons.menu }, { text: t("short.menu") }]} />
      </div>
    </div>
  );
};

export default ANavbar;
