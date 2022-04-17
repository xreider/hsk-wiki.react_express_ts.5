import { EDevicesKinds } from "constants/common";
import { useEffect, useLayoutEffect } from "react";
import { useVisible } from "react-view-sensor";
import { initialANavbarProps, useStoreANavbar } from "stores/useStoreANavbar";
import { useStoreDevice } from "stores/useStoreDevice";

import { PANavbar } from "../ANavbar/ANavbar";

type TUseANavbarStyleHandler = {
  rest: PANavbar;
  avoidChangANavbarStyle: boolean;
};

const useANavbarStyleHandler = ({
  rest,
  avoidChangANavbarStyle = false,
}: TUseANavbarStyleHandler) => {
  const [flag, refNode] = useVisible(0.9);
  // const [isInitialised, setIsInitialised] = useState(false);
  const device = useStoreDevice((state) => state.device);
  const setPropsANavbar = useStoreANavbar((state) => state.setPropsANavbar);
  useLayoutEffect(() => {
    if (avoidChangANavbarStyle) return;
    if (device === EDevicesKinds.desktop) {
      setPropsANavbar(rest);
    }
  }, [device, setPropsANavbar, rest]);

  useEffect(() => {
    // console.log("flag", flag);

    if (avoidChangANavbarStyle) return;
    if (device === EDevicesKinds.desktop) {
      if (flag) {
        setPropsANavbar(rest);
      } else {
        setPropsANavbar(initialANavbarProps);
      }
    }
    // setIsInitialised(true);
    return () => {
      setPropsANavbar(initialANavbarProps);
    };
  }, [flag, device, setPropsANavbar, rest]);

  return { refNode };
};

export default useANavbarStyleHandler;
