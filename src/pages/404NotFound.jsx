import React from 'react'

export default function NotFound() {
  return (
    <div className='py-[25%] text-center text-2xl'>
      404 Not-Found
    </div>
  )
}
{/* {countries.map((item,key) => {
          if ( item.name.official === selectedCountry ) {
            console.log("dd",item.name.official)
            // return (
            //   <div key={key} className="grid grid-cols-2 gap-10 items-center capitalize px-16">
            //     <img src={item.flags.png} alt={item.flags.alt} className={`w-[90%] h-[24rem] ${mode ? '' : 'shadow-xl'}`} />
            //     <div>
            //       <h1 className="text-3xl font-bold mb-7">{item.name.common}</h1>
            //       <div className="grid grid-cols-2 gap-10">
            //         <div className="text-lg">
            //           <h1>
            //             Native Name: <span>{Object.values(item.name.nativeName)[Object.values(item.name.nativeName).length - 1].common}</span>
            //           </h1>
            //           <h1>
            //             Population : <span>{item.population.toLocaleString()}</span>
            //           </h1>
            //           <p>
            //             Region : <span>{item.region}</span>
            //           </p>
            //           <p>
            //             Sub Region : <span>{item.subregion}</span>
            //           </p>
            //           <p>
            //             Capital : <span>{item.capital}</span>
            //           </p>
            //         </div>
            //         <div className="text-lg">
            //           <p>
            //             Top Level Domain : <span>{item.tld}</span>
            //           </p>
            //           <p>
            //             Currencies: <span>{Object.values(item.currencies)[Object.values(item.currencies).length - 1].name}</span>
            //           </p>
            //           <p>
            //             Languages: <span>{Object.values(item.languages).join(', ')}</span>
            //           </p>
            //         </div>
            //       </div>
  
            //       <div className="flex gap-6 mt-10 items-start capitalize">
            //         <p className="text-lg">Borders Countries:</p>
            //         <div className="grid grid-cols-3 gap-5">
            //           {countries.map((item) => {
            //             if (item.name.official === selectedCountry) {
            //               if (item.borders && item.borders.length > 0) {
            //                 return item.borders.map((borderCode) => {
            //                   const borderCountry = countries.find((country) => country.cca3 === borderCode);
            //                   return (
            //                     <div key={borderCode} className={`text-center p-2 ${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>
            //                       <p>{borderCountry ? borderCountry.name.common : 'No Borders Country'}</p>
            //                     </div>
            //                   );
            //                 });
            //               } else {
            //                 return <p className={`text-center p-2 ${mode ? 'bg-Dark-Blue' : 'bg-white shadow-xl'}`}>No Borders Country</p>;
            //               }
            //             }
            //           })}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // );
          }
        })} */}