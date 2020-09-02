import React, { useEffect } from 'react';
import { useState } from 'react';
import Countries from '../Countries/Countries';
import './Home.css'
const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(r => r.json())
            .then(d => {
                setCountries(d);
                //console.log(d);
            })
    }, [])
    //const { name } = countries;
    //console.log(countries);
    const searchClick = ()=>{
        console.log('clicked');
       // const [searchCountry, setSearchCountry] = useState(0);
        //const newCount = searchCountry + 1;
        //setSearchCountry(newCount);
    }
    return (
        <div>
            <div className="header-title">
                <h3 className=""><span>Countries Information</span></h3>
                <small>Coutries Have: {countries.length}</small>
            </div>
            <div className="header-search d-flex">
                <input type="text" id="search-box" className="form-control" placeholder="Seacrch Country..."/>
                <button 
                className="main-button"
                onClick={()=>searchClick()}
                >SEARCH</button>
            </div>
            <div className="get-search-value">

            </div>
            <div className="row container m-auto">
                {
                    countries.map(p => <Countries countries={p} key={p.alpha3Code} />)
                }
            </div>
        </div>

    );
};

export default Home;