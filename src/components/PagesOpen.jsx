import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';


export default function PagesOpen({ countries, mode, handleMode,selectedCountries,setSelectedCountries}) {

  const {name} = useParams()

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });
  
  const selectedCountry = JSON.parse(sessionStorage.getItem('selectedCountry'));
  console.log('Negara 23', selectedCountry);

  return (
    <div className={`h-screen ${mode ? 'bg-Very-Dark-Blue text-white ' : 'bg-Very-Light-Gray text-Very-Dark-Blue-100'}`}>
      <Navbar mode={mode} handleMode={handleMode} />
     
      {selectedCountry.name.official === name ? (
        <div>
          <Link to={'/'}>
            <button className={`${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl text-Very-Dark-Blue-100'} py-2 w-[10%] my-12 rounded-md ms-16`}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
          </Link>
          <div className="grid grid-cols-2 gap-10 items-center capitalize px-16">
                 <img src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} className={`w-[90%] h-[24rem] ${mode ? '' : 'shadow-xl'}`} />
                 <div>
                  <p> {selectedCountry.name.official}</p>
                   <h1 className="text-3xl font-bold mb-7">{selectedCountry.name.common}</h1>
                   <div className="grid grid-cols-2 gap-10">
                     <div className="text-lg">
                       <h1>
                         Native Name: <span>{Object.values(selectedCountry.name.nativeName)[Object.values(selectedCountry.name.nativeName).length - 1].common}</span>
                       </h1>
                       <h1>
                         Population : <span>{selectedCountry.population.toLocaleString()}</span>
                       </h1>
                       <p>
                         Region : <span>{selectedCountry.region}</span>
                       </p>
                       <p>
                         Sub Region : <span>{selectedCountry.subregion}</span>
                       </p>
                       <p>
                         Capital : <span>{selectedCountry.capital}</span>
                       </p>
                     </div>
                     <div className="text-lg">
                       <p>
                         Top Level Domain : <span>{selectedCountry.tld}</span>
                       </p>
                       <p>
                         Currencies: <span>{Object.values(selectedCountry.currencies)[Object.values(selectedCountry.currencies).length - 1].name}</span>
                       </p>
                       <p>
                         Languages: <span>{Object.values(selectedCountry.languages).join(', ')}</span>
                       </p>
                     </div>
                   </div>
  
                   <div className="flex gap-6 mt-10 items-start capitalize">
                     <p className="text-lg">Borders Countries:</p>
                     <div className="grid grid-cols-3 gap-5">
                      {selectedCountry.borders && selectedCountry.borders.length > 0 ? (
                          selectedCountry.borders.map((borderCode)=> {
                            const borderCountry = countries.find((country) => country.cca3 === borderCode);
                            // // Simpan borderCode di sessionStorage
                            // sessionStorage.setItem('selectedBorderCode', JSON.stringify(borderCountry));
                            return (
                              <div key={borderCode} className={`text-center p-2 ${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>
                                <p>{borderCountry ? borderCountry.name.common : borderCode }</p>
                                {/* <p>{borderCode}</p> */}
                              </div>
                            );
                          })
                      ):(
                        <p className={`text-center p-2 ${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>No Borders Country</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
        </div>
      ): (
        <div className='py-[20%] text-center text-2xl'>404 Not-Found</div>
      )}
    </div>
  );
}

 