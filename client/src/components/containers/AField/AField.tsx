import classNames from "classnames";
import { EFieldColorCN } from "constants/common/colors";
import { EScreenWidthNum } from "constants/common/screenWidths";
import { ESpaces } from "constants/CssVars/ESpaces";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface PAField extends HTMLAttributes<HTMLDivElement> {
  marginBottom?: ESpaces; // margin-bottom
  columnMaxScreenWidthPx?: EScreenWidthNum;
}

const AField: FC<PAField> = ({
  children,
  className,
  columnMaxScreenWidthPx,
  marginBottom = ESpaces.normal,
  ...props
}) => {
  return (
    <div
      className={classNames(
        styles.AField_wrapper,
        columnMaxScreenWidthPx &&
          styles[`columnMaxScreenWidthPx_${columnMaxScreenWidthPx}`],
        className,
        marginBottom && styles[`marginBottom_${marginBottom}`]
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AField;
