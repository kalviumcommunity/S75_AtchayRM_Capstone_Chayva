"use client";
import { useEffect, useState } from "react";
import { fabric } from "fabric";

export const useCanvasHook = () => {
  const [canvasEditor, setCanvasEditor] = useState(null);

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas-id", {
      width: 800,
      height: 600,
      backgroundColor: "#ffffff",
    });

    setCanvasEditor(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  return { canvasEditor };
};
