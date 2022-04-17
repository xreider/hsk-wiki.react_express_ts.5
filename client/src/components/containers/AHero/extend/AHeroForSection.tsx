import { FC } from "react";
import AHero, { PAHero } from "../AHero";
import styles from "./styles.module.scss";

export interface PAHeroForSection extends PAHero {}

const AHeroForSection: FC<PAHeroForSection> = ({ children, ...props }) => {
  return (
    <AHero className={styles.wrapper} {...props}>
      <div className={styles.container}>{children}</div>
    </AHero>
  );
};

export default AHeroForSection;
