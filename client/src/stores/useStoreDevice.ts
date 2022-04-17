// import create, { GetState, SetState } from "zustand";
import { EDevicesKinds } from "constants/common";
import create from "zustand";

export type TState = {
  device: EDevicesKinds | undefined;
  setDevice: (device: EDevicesKinds) => void;
};

export const useStoreDevice = create<TState>((set, get) => ({
  device: undefined,
  setDevice: (device) =>
    set((state) => ({
      ...state,
      device,
    })),
}));
