import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Services from '../../api/service';
import { useRouter } from 'next/router';

const ServiceTab = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const router = useRouter();
  const ServiceDetails = Services.find((item) => item.slug === router.query.slug);
  const ServiceTabs = ServiceDetails?.serviceTabs || [];

  return (
    <div className="service-single-tab">
      {/* Navigation */}
      <Nav tabs>
        {ServiceTabs.map((tab) => (
          <NavItem key={tab.id}>
            <NavLink
              className={classnames({ active: activeTab === tab.id })}
              onClick={() => toggle(tab.id)}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      {/* Tab Content */}
      <TabContent activeTab={activeTab}>
        {ServiceTabs.map((tab) => (
          <TabPane tabId={tab.id} key={tab.id}>
            <Row>
              <Col sm="12">
                <p>{tab.content}</p>
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default ServiceTab;
