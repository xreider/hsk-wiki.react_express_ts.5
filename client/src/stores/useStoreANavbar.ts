import { EElColorCN } from "constants/common/colors";
import create from "zustand";

export interface PANavbarProps {
  // onDesktopTopStyle?:
  //   | "transparentBG_WhiteTextColor"
  //   | "transparentBG_BlackTextColor";
  onDesktopTopClassName?: EElColorCN;
}

export const initialANavbarProps: PANavbarProps = {
  // onDesktopTopStyle: undefined,
  onDesktopTopClassName: undefined,
};

export type PUseStoreANavbar = {
  propsANavbar: PANavbarProps;
  setPropsANavbar: (propsANavbar: Partial<PANavbarProps>) => void;
};

export const useStoreANavbar = create<PUseStoreANavbar>((set, get) => ({
  propsANavbar: initialANavbarProps,
  setPropsANavbar: (propsANavbar) =>
    set((state) => ({
      ...state,
      propsANavbar: { ...state.propsANavbar, ...propsANavbar },
    })),
}));
