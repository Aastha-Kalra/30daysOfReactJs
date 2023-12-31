import React, { useState } from "react";

export default function RandomPalette() {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const generatePalette = () => {
    const palette = Array.from({ length: 5 }, () => generateRandomColor());
    setCurrentPalette(palette);
  };

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, currentPalette]);
  };

  const deletePalette = (index) => {
    const updatedPalettes = [...savedPalettes];
    updatedPalettes.splice(index, 1);
    setSavedPalettes(updatedPalettes);
  };

  return (
    <div>
      <h1>Color Palette Generator</h1>

      <div id="current-palette" className="palette-container">
        {currentPalette.map((color, index) => (
          <div key={index} className="color-block" style={{ backgroundColor: color }}>
            {color}
          </div>
        ))}
        <button id="save" onClick={savePalette}>
          Save
        </button>
      </div>

      <div id="saved-palettes" className="palette-container">
        {savedPalettes.map((palette, paletteIndex) => (
          <div key={paletteIndex} className="saved-palette">
            {palette.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="color-block"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            ))}
            <button
              className="delete-palette-button"
              onClick={() => deletePalette(paletteIndex)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button id="generate" onClick={generatePalette}>
        Generate
      </button>
    </div>
  );
}
