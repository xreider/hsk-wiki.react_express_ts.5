import { isMobileOnly } from "react-device-detect";
import { useLocalStorage } from "react-use";
import { useLayoutEffect } from "react";
import { EDevicesKinds } from "constants/common";
import { useStoreDevice } from "stores/useStoreDevice";

const useInitDevice = () => {
  const forcedDeviceFromLocalStorage =
    useLocalStorage<EDevicesKinds>("forcedDevice");

  const device = useStoreDevice((state) => state.device);
  const setDevice = useStoreDevice((state) => state.setDevice);

  useLayoutEffect(() => {
    let deviceVar;
    if (
      typeof forcedDeviceFromLocalStorage === "string" &&
      forcedDeviceFromLocalStorage in EDevicesKinds
    ) {
      deviceVar = forcedDeviceFromLocalStorage;
    } else {
      deviceVar = isMobileOnly ? EDevicesKinds.phone : EDevicesKinds.desktop;
    }
    document.body.dataset.device = deviceVar;
    setDevice(deviceVar);
  }, [device, forcedDeviceFromLocalStorage, setDevice]);
};

export default useInitDevice;
