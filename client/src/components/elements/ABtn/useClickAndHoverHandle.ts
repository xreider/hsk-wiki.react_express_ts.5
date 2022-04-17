import { ECssSpeedValue } from "constants/CssValues/ECssSpeedValue";
import { useGetCssValueNum } from "hooks/common/useGetCssVars";
import { useGetDeviceFromStore } from "hooks/common/useGetDeviceFromStore";
import {
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const useClickAndHoverBehaviourHandle = (props: any) => {
  const { isPhone } = useGetDeviceFromStore();
  const [slowestCssSpeed] = useGetCssValueNum([ECssSpeedValue.verySlow]);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  let clickTimeoutId: MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setClicked(true);
    props?.onClick?.(e);
  };
  const onMouseEnter: MouseEventHandler<HTMLButtonElement> = (e) => {
    !isPhone && setHovered(true);
    props?.onMouseEnter?.(e);
  };
  const onMouseLeave: MouseEventHandler<HTMLButtonElement> = (e) => {
    !isPhone && setHovered(false);
    props?.onMouseLeave?.(e);
  };

  useEffect(() => {
    if (clicked) {
      clickTimeoutId.current = setTimeout(() => {
        setHovered(false);
        setClicked(false);
      }, slowestCssSpeed);
    }
    return () => {
      if (clickTimeoutId.current) {
        clearTimeout(clickTimeoutId.current);
      }
    };
  }, [clicked]);

  return { onClick, onMouseEnter, onMouseLeave, clicked, hovered };
};

export default useClickAndHoverBehaviourHandle;
