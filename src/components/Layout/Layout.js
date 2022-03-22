import React, { useContext, useEffect } from "react";

import { myContext } from "../../containers/State/Store";

const Layout = (props) => {
  const { burger } = useContext(myContext);

  useEffect(() => {}, [burger]);
  return <main className={burger ? "hidden" : ""}>{props.children}</main>;
};

export default Layout;
