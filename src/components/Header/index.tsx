import { useState } from "react";
import { Container } from "./style";

export function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  function handleToggleSideBar() {
    setShowSideBar((prevValue) => (prevValue == true ? false : true));
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      handleToggleSideBar();
    }
  }

  return <Container></Container>;
}
