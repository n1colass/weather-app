import { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [searchedCity, setSearchedCity] = useState<string>('');
  return (
    <>
      <Form setSearchedCity={setSearchedCity} />
      <Weather searchedCity={searchedCity} />
    </>
  );
}

export default App;
