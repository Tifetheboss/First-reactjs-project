// import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section className="area" style={{ backgroundColor: colorValue, color: isDarkText ? '#000' : '#fff' }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : "none"}</p>
    </section>
   
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
