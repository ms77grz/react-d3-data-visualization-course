import './App.css';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { message } from './utils/message';

const csvUrl =
  'https://gist.githubusercontent.com/ms77grz/913352d4b8209e98a7d894bfcc90a4bf/raw/cssNamedColors.csv';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : 'Loading...'}</pre>;
}

export default App;
