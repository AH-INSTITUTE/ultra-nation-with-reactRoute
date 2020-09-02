import React from 'react';
import './Countries.css';
import { CardDeck, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
const Countries = (props) => {
    //console.log(props.countries);
    const faPlaneDep = <FontAwesomeIcon icon={faPlaneDeparture} />
    const { name, flag, capital, alpha3Code } = props.countries;
    const history = useHistory();
    const handleClick = (name, alpha3Code) => {
        const url = `/country-details/${name}/${alpha3Code}`;
        history.push(url);
    }
    return (
        <div className="col-md-4 mb-4">
            <CardDeck>
                <Card className="card-style">
                    <Card.Img variant="top" src={flag} />
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>
                        <Card.Text className="text-justify">
                            If you Want to know more information, about our 
                            <strong className="text-warning country-name cursor-alias"> {name} </strong> country <strong> 
                                <Link to={`/country-details/${name}/${alpha3Code}/`} className="text-danger">Click Here!</Link> 
                            </strong> or Click the <strong className="text-success"> More info </strong> button.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        
                        <button
                        target="_blank"
                        onClick={()=> handleClick(name,alpha3Code)} 
                        className="main-button">
                            More info {faPlaneDep}
                        </button>

                        <small className="text-muted ">Capital : {capital}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Countries;