const StatusTabs = (props) => {
  const { tabs, selectedTab, setSelectedTab } = props;

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
