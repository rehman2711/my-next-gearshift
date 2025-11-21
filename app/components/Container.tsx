import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-8 py-6">{children}</div>;
};

export default Container;
