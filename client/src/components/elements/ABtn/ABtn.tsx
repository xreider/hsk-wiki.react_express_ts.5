import {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  ReactElement,
  useMemo,
  useState,
} from "react";
import cn from "classnames";
import st from "./styles.module.scss";
import { EElColorCN } from "constants/common/colors";
import { EClickBtnPC, EClickBtnPhone, EHoverBtnPC } from "./EBtnBehaviour";
import AIcon, { PAIcon } from "../AIcon/AIcon";
import classNames from "classnames";
import useClickAndHoverBehaviourHandle from "./useClickAndHoverHandle";

export interface PTextABtn {
  text?: string | ReactElement;
  className?: string;
  style?: CSSProperties;
}

export interface PABtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  // appearance and behaviour
  kind?: "glow" | "text" | "solid" | "outline";
  behaviour?: {
    click?: (EClickBtnPC | EClickBtnPhone)[];
    hover?: EHoverBtnPC[];
  };
  classNameContainer?: string;
  color?: EElColorCN;
  el: (PTextABtn | PAIcon)[];
}

const ABtn: FC<PABtn> = ({
  // appearance and behaviour
  kind,
  color,
  behaviour,
  el,

  className,
  classNameContainer,
  ...props
}) => {
  const clickBehaviours = useMemo(() => getCl(kind, behaviour), [behaviour]);
  const hoverBehaviours = useMemo(() => getHv(kind, behaviour), [behaviour]);

  const { onClick, onMouseEnter, onMouseLeave, clicked, hovered } =
    useClickAndHoverBehaviourHandle(props);

  return (
    <button
      className={cn(
        st.ABtn_wrapper,
        kind && st[`kind_${kind}`],
        clicked && st.clicked,
        color && st[`color_${color}`],
        hovered && st.hovered,
        ...clickBehaviours,
        ...hoverBehaviours,
        className
      )}
      {...props}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={cn(st.ABtn_container, classNameContainer)}>
        {el.map((e, i) => {
          // text
          if ("text" in e) {
            return (
              <span className={cn(st.text_wrapper, e.className)} key={i} {...e}>
                {e.text}
              </span>
            );
          }
          // icon
          if ("icon" in e) {
            return (
              <AIcon
                className={cn(st.icon_wrapper, e.className)}
                key={i}
                {...e}
              />
            );
          }
        })}
      </span>
    </button>
  );
};

export default ABtn;

function getCl(kind: PABtn["kind"], behaviour: PABtn["behaviour"]) {
  if (kind === "glow") {
    return [st[`clickBehaviour_${EClickBtnPhone.shrink}`]];
  }
  const clickBehaviours = behaviour?.click;
  if (!clickBehaviours) {
    return [];
  }
  if (Array.isArray(clickBehaviours)) {
    return (
      clickBehaviours?.map((effect) => st[`clickBehaviour_${effect}`]) || []
    );
  } else {
    return [st[`clickBehaviour_${clickBehaviours}`]];
  }
}

function getHv(kind: PABtn["kind"], behaviour: PABtn["behaviour"]) {
  if (kind === "glow") {
    return [st[`hoverBehaviour_${EHoverBtnPC.upFull}`]];
  }
  const hoverBehaviours = behaviour?.hover;
  if (!hoverBehaviours) {
    return [];
  }

  if (Array.isArray(hoverBehaviours)) {
    return (
      hoverBehaviours?.map((effect) => st[`hoverBehaviour_${effect}`]) || []
    );
  } else {
    return [st[`hoverBehaviour_${hoverBehaviours}`]];
  }
}
