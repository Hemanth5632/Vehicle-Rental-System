import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const VehicleListingsPage = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('/api/vehicles'); // Adjust the URL to match your API endpoint
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <Container>
            <h2 className="my-4">Available Vehicles</h2>
            <Row>
                {vehicles.map((vehicle) => (
                    <Col key={vehicle._id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={vehicle.imageUrl} alt={vehicle.name} />
                            <Card.Body>
                                <Card.Title>{vehicle.name}</Card.Title>
                                <Card.Text>
                                    <strong>Type:</strong> {vehicle.type}<br />
                                    <strong>Price:</strong> ${vehicle.price}/day
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default VehicleListingsPage;
