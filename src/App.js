import './App.css';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { Linear } from './components/Linear';
import { Radial } from './components/Radial';

const csvUrl =
  'https://gist.githubusercontent.com/ms77grz/913352d4b8209e98a7d894bfcc90a4bf/raw/cssNamedColors.csv';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

function App() {
  const [data, setData] = useState(null);
  const [switchViz, setSwitchViz] = useState(false);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if (!data) return <pre>Loading...</pre>;

  const onLinear = () => setSwitchViz(true);
  const onRadial = () => setSwitchViz(false);

  return (
    <>
      <header>
        <button onClick={onLinear}>Linear</button>
        <button onClick={onRadial}>Radial</button>
      </header>
      {switchViz ? (
        <Linear data={data} />
      ) : (
        <Radial
          data={data}
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
        />
      )}
    </>
  );
}

export default App;
