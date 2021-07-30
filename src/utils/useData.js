import { useState, useEffect } from 'react';
import * as d3 from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ms77grz/cc74b31043931b718047c95b9a050379/raw/UN_Population_2019.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'];
      return d;
    };
    d3.csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    });
  }, []);

  return data;
};
