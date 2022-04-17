import AField from "components/containers/AField/AField";
import { ESpaces } from "constants/CssVars/ESpaces";

import { FC } from "react";
import styles from "./styles.module.scss";

export interface PAHeroWithNotifications {}

const AHeroWithNotifications: FC<PAHeroWithNotifications> = () => {
  return (
    <AField
      className={styles.AHeroWithNotificationsWrapper}
      marginBottom={ESpaces.bigBlock}
    >
      {/* <ANotificationSignin /> */}
    </AField>
  );
};

export default AHeroWithNotifications;
