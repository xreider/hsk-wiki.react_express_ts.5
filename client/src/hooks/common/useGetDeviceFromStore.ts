import { EDevicesKinds } from "constants/common";
import { useStoreDevice } from "stores/useStoreDevice";

export const useGetDeviceFromStore = () => {
  let deviceFromStore;
  let isPhone;

  deviceFromStore = useStoreDevice.getState().device;
  isPhone = deviceFromStore === EDevicesKinds.phone;
  return { isPhone, deviceFromStore };
};
