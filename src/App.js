import React, { useRef, useState } from "react";
import DrawingControls from "./components/drawingControls";
import DrawableArea from "./components/drawableArea";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const App = () => {
  const canvasRef = useRef(null);
  const [isErasing, setIsErasing] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [selectedBrush, setSelectedBrush] = useState("normal");
  const [gradientStartColor, setGradientStartColor] = useState("#FF0000");
  const [gradientEndColor, setGradientEndColor] = useState("#00FF00");

  const toggleEraser = () => {
    setIsErasing(!isErasing);
  };

  const resetArea = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const fillArea = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = selectedColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleGradientStartColorChange = (color) => {
    setGradientStartColor(color);
  };

  const handleGradientEndColorChange = (color) => {
    setGradientEndColor(color);
  };

  const handleBrushSizeChange = (event) => {
    setBrushSize(parseInt(event.target.value));
  };

  const handleBrushChange = (brushType) => {
    setSelectedBrush(brushType);
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "Desenho.png";
    link.href = url;
    link.click();
  };

  const Github = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #000000;
      font-family: "Roboto", sans-serif;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <DrawingControls
        canvasRef={canvasRef}
        downloadDrawing={downloadDrawing}
        isErasing={isErasing}
        toggleEraser={toggleEraser}
        resetArea={resetArea}
        fillArea={fillArea}
        brushSize={brushSize}
        handleBrushSizeChange={handleBrushSizeChange}
        selectedBrush={selectedBrush}
        handleBrushChange={handleBrushChange}
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
        gradientStartColor={gradientStartColor}
        handleGradientStartColorChange={handleGradientStartColorChange}
        gradientEndColor={gradientEndColor}
        handleGradientEndColorChange={handleGradientEndColorChange}
      />
      <DrawableArea
        canvasRef={canvasRef}
        isErasing={isErasing}
        selectedColor={selectedColor}
        brushSize={brushSize}
        selectedBrush={selectedBrush}
        gradientStartColor={gradientStartColor}
        gradientEndColor={gradientEndColor}
      />

      <Github>
        <a
          href="https://github.com/kristyancarvalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon style={{ color: "#000000", fontSize: 30 }} />
          Kristyan Carvalho
        </a>
      </Github>
    </div>
  );
};

export default App;
