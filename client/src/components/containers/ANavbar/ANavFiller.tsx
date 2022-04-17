import { FC } from "react";
import cn from "classnames";
import st from "./styles.module.scss";

export interface PANavFiller {}

const ANavFiller: FC<PANavFiller> = () => {
  return <div className={cn(st.ANavFiller_wrapper)} />;
};

export default ANavFiller;
