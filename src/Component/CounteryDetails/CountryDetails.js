import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './CountryDetails.css'
const CountryDetails = () => {
    let { countryAlpha3code } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryAlpha3code}`
        fetch(url)
            .then(r => r.json())
            .then(d => setCountry(d))
    }, [countryAlpha3code]);
    //console.log(country);
    const { name, flag, alpha2Code, alpha3Code, nativeName, altSpellings, callingCodes, capital, numericCode, population, region, subregion } = country;
    //console.log(country.name && altSpellings.[1]);
    return (
        <div className="container">
            <div className="header-manu">
                <Link to='/home'>Home</Link>
            </div>
            <Card className="country-details-sec">
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        {/* <span>{country.name && currencies[0].code}</span> */}
                        Our Frist Alpha Code is <strong className="text-danger">{alpha2Code}</strong> & Scenod Alpha Code is <strong className="text-danger">{alpha3Code}</strong> & Our Nativ Name is <strong className="text-danger">{nativeName} </strong>
                    </Card.Text>
                    <Card.Text>
                        Our Frist Alt Spellings is <strong className="text-primary border-bottom border-success">{country.name && altSpellings.[0]}</strong> & Scenod Alt Spellings is <strong className="text-primary border-bottom border-success">{country.name && altSpellings.[1]}</strong> .
                        <br />
                        <span>callingCodes : <strong className=" text-primary">{callingCodes}</strong></span>
                        <br />
                        <span>Capital : <strong className=" text-primary">{capital}</strong></span>
                        <br />
                        <span>Numeric Code : <strong className=" text-primary">{numericCode}</strong></span>
                        <br />
                        <span>Population : <strong className=" text-primary">{population}</strong></span>
                        <br />
                        <span>Region : <strong className=" text-primary">{region}</strong></span>
                        <br />
                        <span>Sub Region : <strong className=" text-primary">{subregion}</strong></span>



                    </Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default CountryDetails;