import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div>   
      <Header />
      {children}
      <Footer />
    </div>
  )
}