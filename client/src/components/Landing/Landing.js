import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import SignIn from '../Forms/SignIn';

const Landing = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const navStyle = { cursor: "default" }

    return (
        <Container>
            <Row>
                <Col md={{ size: "6", offset: "3" }}>
                    <Card style={{ fontWeight: "500", fontSize: "1.5rem" }}>
                        <CardBody>
                            <CardTitle>Welcome to ExpenseIT</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>Manage your expenses with ExpenseIT.</CardText>
                            <Button onClick={props.googleAuth} className="d-flex justify-contents-between" style={{ background: "#DB4437", color: "#fff", width: "15rem" }}>
                                <span>Log In with Google</span>
                                <FontAwesomeIcon icon={faGooglePlus} style={{ fontSize: "3rem" }} />
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* <Nav tabs>
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
                                <SignIn googleAuth={props.googleAuth} />
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
            </TabContent> */}
        </Container >
    );
}

export default Landing;