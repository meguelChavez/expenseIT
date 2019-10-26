import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SignIn from '../Forms/SignIn';

const Landing = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const navStyle = { cursor: "default" }

    return (
        <Container>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                        style={navStyle}
                    >
                        Sign In
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                        style={navStyle}
                    >
                        Register
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Container>
                        <Row>
                            <Col sm="12" md="6">
                                <SignIn />
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default Landing;