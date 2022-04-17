import classNames from "classnames";
import { ESpaces } from "constants/CssVars/ESpaces";
import { FC } from "react";
import AField, { PAField } from "../AField/AField";
import { PANavbar } from "../ANavbar/ANavbar";
import styles from "./styles.module.scss";
import useANavbarStyleHandler from "./useANavbarStyleHandler";

export interface PAHero extends PAField {
  aNavbarProps?: PANavbar;
  size: "fullWidth" | "widthWidestContainer";
}

const AHero: FC<PAHero> = ({
  children,
  aNavbarProps = {},
  size,
  className,
  ...props
}) => {
  const { refNode } = useANavbarStyleHandler({
    rest: aNavbarProps,
    avoidChangANavbarStyle: size !== "fullWidth",
  });

  return (
    <div ref={refNode}>
      <AField
        className={classNames(
          styles.wrapper,
          size && styles[`size_${size}`],
          className
        )}
        marginBottom={ESpaces.bigBlock}
        {...props}
      >
        {children}
      </AField>
    </div>
  );
};

export default AHero;
