import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import AdminHeader from "./admin-header";


const Admin = () => {

    return (
        <>
            <Container fluid className="bg-dark min-vh-100">
                <Row className="justify-content-md-center">
                    <Col xs={8}>
                        <AdminHeader />
                        <div className="bg-white mt-2 mb-4 p-4 border border-1 rounded">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;