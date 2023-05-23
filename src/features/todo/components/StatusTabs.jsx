import { useContext } from "react";
import { StatusTabContext } from "../contexts/StatusTabProvider";

const StatusTabs = (props) => {
  const { tabs } = props;
  const { selectedTab, setSelectedTab } = useContext(StatusTabContext);

  return (
    <div className="status-tabs">
      <ul className="status-tab-group">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={tab === selectedTab ? "active-tab" : "tab"}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusTabs;
