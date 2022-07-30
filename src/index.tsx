import React, { FC, ReactNode } from "react";

interface PackagenameProps {
  children: ReactNode;
}

const Packagename: FC<PackagenameProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Packagename;
