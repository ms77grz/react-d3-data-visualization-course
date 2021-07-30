import * as d3 from 'd3';

export const Radial = ({ data, width, height, centerX, centerY }) => {
  const pieArc = d3.arc().innerRadius(0).outerRadius(width);

  const colorPie = d3.pie().value(1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map(d => (
          <path fill={d.data['RGB hex value']} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
};

/* 

### Without d3 ###

{data.map((d, i) => (
  <path
    fill={d['RGB hex value']}
    d={pieArc({
      startAngle: (i / data.length) * 2 * Math.PI,
      endAngle: ((i + 1) / data.length) * 2 * Math.PI,
    })}
  />
))}

*/
