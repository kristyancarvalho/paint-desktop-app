import React from "react";
import Button from "@mui/material/Button";
import BrushIcon from "@mui/icons-material/Brush";
import EditOffIcon from "@mui/icons-material/EditOff";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import SaveIcon from "@mui/icons-material/Save";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const Main = styled.div`
  padding: 8px 0;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  z-index: 5;
`;

const TitleAsSpan = styled.span`
  font-weight: bold;
`;

const DrawingControls = ({
  isErasing,
  toggleEraser,
  resetArea,
  fillArea,
  brushSize,
  handleBrushSizeChange,
  selectedBrush,
  handleBrushChange,
  selectedColor,
  handleColorChange,
  gradientStartColor,
  handleGradientStartColorChange,
  gradientEndColor,
  handleGradientEndColorChange,
  canvasRef,
  downloadDrawing,
}) => {
  const handleResetArea = () => {
    resetArea();
  };

  const handleFillArea = () => {
    fillArea();
  };

  return (
    <Main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button
          variant="outlined"
          onClick={toggleEraser}
          className={isErasing ? "active" : ""}
        >
          {isErasing ? (
            <>
              <BrushIcon /> Pincel
            </>
          ) : (
            <>
              <EditOffIcon /> Borracha
            </>
          )}
        </Button>
        <Button variant="outlined" onClick={handleResetArea}>
          <DeleteIcon />
          Limpar
        </Button>
        <Button
          style={{ gap: "2px" }}
          variant="outlined"
          onClick={handleFillArea}
        >
          <FormatColorFillIcon />
          Pintar fundo
        </Button>
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
        <div>
          <TitleAsSpan>Pincel:</TitleAsSpan>
          <div>
            <label>
              <Checkbox
                checked={selectedBrush === "normal"}
                onChange={() => handleBrushChange("normal")}
              />
              Normal
            </label>
            <label>
              <Checkbox
                checked={selectedBrush === "gradient"}
                onChange={() => handleBrushChange("gradient")}
              />
              Gradiente
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TitleAsSpan>Cor: </TitleAsSpan>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TitleAsSpan>Gradiente: </TitleAsSpan>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              type="color"
              value={gradientStartColor}
              onChange={(e) => handleGradientStartColorChange(e.target.value)}
            />
            <input
              type="color"
              value={gradientEndColor}
              onChange={(e) => handleGradientEndColorChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button
          style={{ gap: "2px" }}
          variant="contained"
          onClick={downloadDrawing}
        >
          <SaveIcon />
          Baixar Desenho
        </Button>
      </div>
    </Main>
  );
};

export default DrawingControls;
