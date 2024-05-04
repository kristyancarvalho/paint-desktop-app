import React from "react";
import Button from "@mui/material/Button";

const DownloadDraw = ({ canvasRef }) => {
  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "Desenho.png";
    link.href = url;
    link.click();
  };

  return (
    <div>
      <Button variant="contained" onClick={downloadDrawing}>
        Baixar Desenho
      </Button>
    </div>
  );
};

export default DownloadDraw;
