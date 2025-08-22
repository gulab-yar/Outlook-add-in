import React from 'react';
import { TabList, Tab } from '@fluentui/react-components';
import { CalendarMonthRegular, DataHistogramRegular, PeopleRegular } from '@fluentui/react-icons';

const Footer = () => {
  const [selectedTab, setSelectedTab] = React.useState<string>('eventTypes');

  const tabStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: isSelected ? '#e5f1ff' : 'transparent',
    color: isSelected ? '#0064d2' : '#444',
    fontWeight: isSelected ? '600' : 'normal',
    fontSize: '14px',
    cursor: 'pointer',
    minWidth: '80px',
  });

  return (
    <footer
      style={{
        padding: '12px',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
      }}
    >
      <TabList
        selectedValue={selectedTab}
        onTabSelect={(_, data) => setSelectedTab(data.value as string)}
        aria-label="Footer Navigation"
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <Tab value="meetings" style={tabStyle(selectedTab === 'meetings')} icon={<CalendarMonthRegular style={{ fontSize: 20 }} />}>
          Meetings
        </Tab>
        <Tab value="eventTypes" style={tabStyle(selectedTab === 'eventTypes')} icon={<DataHistogramRegular style={{ fontSize: 20 }} />}>
          Event types
        </Tab>
        <Tab value="contacts" style={tabStyle(selectedTab === 'contacts')} icon={<PeopleRegular style={{ fontSize: 20 }} />}>
          Contacts
        </Tab>
      </TabList>
    </footer>
  );
};

export default Footer;

