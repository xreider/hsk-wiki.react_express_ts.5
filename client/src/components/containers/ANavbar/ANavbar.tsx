import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import st from "./styles.module.scss";
import { EFieldColorCN } from "constants/common/colors";
import { EAIcons } from "components/elements/AIcon/AIcon";
import ANavItem from "./ANavItem";
import ASearchForm from "./ASearchForm";
import { useStoreANavbar } from "stores/useStoreANavbar";

import useScrollDirection, {
  EScrollDir,
} from "hooks/common/useScrollDirection";
import { useGetCssValueNum } from "hooks/common/useGetCssVars";
import { ECssSpeedValue } from "constants/CssValues/ECssSpeedValue";

export interface PANavbar {}

const ANavbar: FC<PANavbar> = () => {
  const { t } = useTranslation();
  const {
    // propsANavbar: { onDesktopTopStyle },
    propsANavbar: { onDesktopTopClassName },
  } = useStoreANavbar();
  const scrollDir = useScrollDirection();
  const [toTopNum, setToTopNum] = useState(0);
  const [zeroToTop, setZeroToTop] = useState(true);
  const [positionAbsolute, setPositionAbsolute] = useState(true);
  const [animationUp, setAnimationUp] = useState(false);
  const [normalSpeed] = useGetCssValueNum([ECssSpeedValue.slowest]);
  let timeoutId: MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y);
      setToTopNum(Math.abs(currPos.y));
      setZeroToTop(Math.abs(currPos.y) === 0);
    },
    [],
    undefined,
    false,
    300
  );

  useEffect(() => {
    console.log("scrollDir", scrollDir);
    console.log("toTopNum", toTopNum);
    console.log("zeroToTop", zeroToTop);

    if (zeroToTop) {
      console.log("!!!!!!!!!!!!!!!!!", 1);
      setPositionAbsolute(true);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      // } else if (toTopNum < 110 && scrollDir !== EScrollDir.up) {
      //   // console.log("!!!!!!!!!!!!!!!!!", 2);
      //   // setPositionAbsolute(true);
      // } else if (zeroToTop && scrollDir === EScrollDir.down && toTopNum < 110) {
      //   // console.log("!!!!!!!!!!!!!!!!!", 3);
      //   // setPositionAbsolute(true);
      // } else if (toTopNum < 130 && scrollDir === EScrollDir.down) {
      //   // console.log("!!!!!!!!!!!!!!!!!", 4);
      //   // setPositionAbsolute(true);
    } else if (scrollDir === EScrollDir.down) {
      console.log("!!!!!!!!!!!!!!!!!", 5);
      // setAnimationUp(true);
      setPositionAbsolute(true);
      // timeoutId.current = setTimeout(() => {
      // }, normalSpeed);
    } else if (toTopNum > 110 && scrollDir === EScrollDir.up) {
      console.log("!!!!!!!!!!!!!!!!!", 6);
      setPositionAbsolute(false);
      // if (timeoutId.current) {
      //   clearTimeout(timeoutId.current);
      // }
    }
  }, [scrollDir, toTopNum, zeroToTop, setPositionAbsolute, normalSpeed]);

  // useEffect(() => {
  //   if (scrollDir === EScrollDir.down) {
  //     console.log("!!!!!!!!!!!!!!!!!", 5);
  //     setAnimationUp(true);
  //     // setPositionAbsolute(true);
  //     setTimeout(() => {
  //       setAnimationUp(false);
  //     }, normalSpeed);
  //   }
  // }, [scrollDir, normalSpeed]);

  return (
    <div
      className={cn(
        st.ANavbar_wrapper,
        EFieldColorCN.dark,
        onDesktopTopClassName,
        onDesktopTopClassName && st["transparentBG"],
        positionAbsolute && st["positionAbsolute"],
        (toTopNum > 110 || !positionAbsolute) && st[`positionFixed`]
        // scrollDir === EScrollDir.down && st[`scrollDirDown`],
        // animationUp && st["animationUp"]
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
