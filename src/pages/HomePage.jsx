import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const getFilterItems = (query, countries) => {
  if (!query) {
    return countries;
  }
  return countries.filter((item) =>
    item.name.common.toLowerCase().includes(query.toLowerCase())
  );
};

export default function HomePage({mode,handleMode, setSelectedCountries,countries, setCountries}) {

  const [query, setQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Select Region');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((resp) => {
        setCountries(resp.data);
        localStorage.setItem('countriesData', JSON.stringify(resp.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setCountries]);
  
  useEffect (()=> {
    document.body.style.overflow = "auto";
  },[])

  const handleFilterRegion = (region) => {
    setSelectedRegion(region);
    setFilterRegion('');
  };

  const filterItems = getFilterItems(query, countries);
  
  const filteredByRegion =
  selectedRegion === 'Select Region'
      ? filterItems
      : filterItems.filter((item) => item.region === selectedRegion);

  const handleOpenPages = (itemCommon) => {
    setSelectedCountries(itemCommon)
    sessionStorage.setItem('selectedCountry', JSON.stringify(itemCommon));
  }
  
      
  return (
    <div>
      <Navbar mode={mode} handleMode={handleMode}/>
    <div className={`px-10 ${mode ? 'bg-Very-Dark-Blue text-white ' :'bg-Very-Light-Gray text-Very-Dark-Blue-100'} ${query ? 'h-screen overflow-hidden' : ''}`}>
      <form action="" className="py-14 flex items-center justify-between">
        <div className={`w-[30%] flex items-center gap-2 px-4 py-2 ${mode?'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>
          <label htmlFor="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
          <input
            type="text"
            placeholder="Search a country...."
            className={`w-full outline-none ${mode ? 'bg-Dark-Blue' : 'bg-white'}`}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="w-[19%] relative">
          <div
            className={`flex items-center justify-between  px-4 py-2 cursor-pointer ${mode ?'bg-Dark-Blue':'bg-white shadow-xl'} `}
            onClick={() => setFilterRegion(!filterRegion)}
          >
            {selectedRegion ? (<p>{selectedRegion}</p>) : (<p>Select Region</p>)}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          {filterRegion  && (
            <div className={`absolute w-full mt-1 py-2 ${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Select Region')}
              >
                All
              </p>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Africa')}
              >
                Africa
              </p>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Americas')}
              >
                America
              </p>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Asia')}
              >
                Asia
              </p>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Europe')}
              >
                Europa
              </p>
              <p
                className="cursor-pointer hover:bg-Very-Dark-Blue hover:text-white px-4 w-full text-start"
                onClick={() => handleFilterRegion('Oceania')}
              >
               Oceania
              </p>
            </div>
          )}
        </div>
      </form>
      
      <div className="grid grid-cols-4 gap-10 pb-10">
        {filteredByRegion.map((item, key) => (
          <Link to={`/country/${item.name.official}`}>
            <div 
              key={key} 
              className={`${mode? 'bg-Dark-Blue' : 'bg-white shadow-xl'} pb-5 cursor-pointer`}
              onClick={()=>handleOpenPages(item)}
            >
              <img src={item.flags.png} alt={item.flags.alt} className="h-[10rem] w-full" />
              <p className="hidden">{item.name.common}</p>
              <h2 className="mt-4 font-bold text-[16px] px-6">{item.name.official}</h2>
              <div className="mt-4 px-6">
                <p>Population : <span>{item.population.toLocaleString()}</span></p>
                <p>Region : <span>{item.region}</span></p>
                <p>Capital : <span>{item.capital}</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
