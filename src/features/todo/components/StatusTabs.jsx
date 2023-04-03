const StatusTabs = (props) => {
  const tabs = ["All", "Todo", "In Progress", "Completed"];

  return (
    <div className="status-tabs">
      <ul className="status-tab-group">
        {tabs.map((tab) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatusTabs;
