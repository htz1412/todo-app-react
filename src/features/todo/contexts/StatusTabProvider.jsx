import { createContext, useState } from "react";
import { STATUS_TABS } from "../../shared/constants/todo";

const StatusTabContext = createContext();

const StatusTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(STATUS_TABS.ALL);
  return (
    <StatusTabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </StatusTabContext.Provider>
  );
};

export { StatusTabContext, StatusTabProvider };
