// duplicate in client\src\styles\includes\screenWidths.scss
export enum EScreenWidthStr {
  px1600 = "1600",
  px1280 = "1280",
  px1024 = "1024",
  px960 = "960",
  px800 = "800",
  px640 = "640",
  px480 = "480",
  px400 = "400",
  px360 = "360",
  px320 = "320",
  px300 = "300",
  px280 = "280",
}

export enum EScreenWidthNum {
  px1600 = 1600,
  px1280 = 1280,
  px1024 = 1024,
  px960 = 960,
  px800 = 800,
  px640 = 640,
  px480 = 480,
  px400 = 400,
  px360 = 360,
  px320 = 320,
  px300 = 300,
  px280 = 280,
}

type TScreensWidth = {
  min: Partial<
    Record<keyof typeof EScreenWidthStr, `min${EScreenWidthStr}px` | undefined>
  >;
  max: Partial<
    Record<keyof typeof EScreenWidthStr, `max${EScreenWidthStr}px` | undefined>
  >;
};

export const screensWidth: TScreensWidth = {
  min: {},
  max: {},
};

Object.values(EScreenWidthStr).forEach((width) => {
  screensWidth.min[`px${width}`] = `min${width}px`;
  screensWidth.max[`px${width}`] = `max${width}px`;
});

// export const screensWidth: {
//   min: { [K: string]: `min${EScreenWidthStr}px` };
//   max: { [K: string]: `max${EScreenWidthStr}px` };
// } = {
//   min: {},
//   max: {},
// };
// export const screensWidth: {
//   min: Record<?`px${EScreenWidthStr}`, ?string> | {};
//   max: Record<?`px${EScreenWidthStr}`, ?string> | {};
// } = {
//   min: {},
//   max: {},
// };
