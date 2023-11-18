import countries from 'world-countries';
const formattedCountries = countries
  .filter(country => country.cca2 === 'AU' || country.cca2 === 'NZ') // Filter for Australia and New Zealand
  .map(country => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
    
  }));

  const useCountries = () => {
    const getAll = () => formattedCountries;
  
    const getByValue = (value: string) => {
      return formattedCountries.find(item => item.value === value);
    }
  
    return {
      getAll,
      getByValue
    }
  };
export default useCountries;
