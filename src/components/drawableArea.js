import React, { useEffect } from "react";

const DrawableArea = ({
  canvasRef,
  isErasing,
  selectedColor,
  brushSize,
  selectedBrush,
  gradientStartColor,
  gradientEndColor,
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
      canvas.style.cursor = isErasing ? "crosshair" : "pointer";
    };

    const stopDrawing = () => {
      isDrawing = false;
      canvas.style.cursor = "default";
    };

    const draw = (e) => {
      if (!isDrawing) return;

      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = isErasing ? "#ffffff" : selectedColor;
      context.lineWidth = brushSize;

      if (selectedBrush === "gradient") {
        const gradient = context.createLinearGradient(
          lastX,
          lastY,
          e.offsetX,
          e.offsetY
        );
        gradient.addColorStop(0, gradientStartColor);
        gradient.addColorStop(1, gradientEndColor);
        context.strokeStyle = gradient;
      }

      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, [
    canvasRef,
    isErasing,
    selectedColor,
    brushSize,
    selectedBrush,
    gradientStartColor,
    gradientEndColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={1600}
      height={800}
      style={{ border: "1px solid black" }}
    />
  );
};

export default DrawableArea;
