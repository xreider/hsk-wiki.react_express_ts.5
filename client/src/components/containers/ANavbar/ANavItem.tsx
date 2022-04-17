import { FC } from "react";
import cn from "classnames";
import st from "./styles.module.scss";
import ABtn, { PABtn } from "components/elements/ABtn/ABtn";
import {
  EClickBtnPC,
  EClickBtnPhone,
  EHoverBtnPC,
} from "components/elements/ABtn/EBtnBehaviour";
import { EElColorCN } from "constants/common/colors";

export interface PANavItem extends PABtn {
  wideFont?: boolean;
}

const ANavItem: FC<PANavItem> = ({ wideFont, ...prors }) => {
  return (
    <ABtn
      classNameContainer={cn(
        st.ANavbar_item,
        EElColorCN.textColor,
        wideFont && st.wideFont
      )}
      behaviour={{
        click: [EClickBtnPhone.showMask, EClickBtnPhone.shrink],
        hover: [EHoverBtnPC.showMask, EHoverBtnPC.up],
      }}
      {...prors}
    />
  );
};

export default ANavItem;
