export const Linear = ({ data }) =>
  data.map(d => (
    <div
      style={{
        backgroundColor: d['RGB hex value'],
        width: '500px',
        height: '10px',
      }}
    ></div>
  ));
