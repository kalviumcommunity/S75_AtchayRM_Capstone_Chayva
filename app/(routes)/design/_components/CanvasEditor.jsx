import { fabric } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import { useCanvasHook } from '../[designId]/page';

function CanvasEditor({DesignInfo}) {
    const canvasRef = useRef();
    const [canvas, setCanvas] = useState(null);
    const {CanvasEditor,setCanvasEditor}=useCanvasHook();
/***
 * Used to init the canvas with default width and height
 */
    useEffect(() => {
        console.log("DesignInfo", DesignInfo)
        if (canvasRef.current&&DesignInfo) {
            const initCanvas = new fabric.Canvas(canvasRef.current, {
                width: DesignInfo?.width/1.2,
                height: DesignInfo?.height/1.2,
                backgroundColor: '#fff',
            });

            //Set high res canvas
            const scaleFactor=window.devicePixelRatio||1;
            initCanvas.set({
                width:DesignInfo?.width * scaleFactor,
                height:DesignInfo?.height* scaleFactor,
                zoom:1/ scaleFactor
            })
            initCanvas.renderAll();
            setCanvas(initCanvas);
            setCanvasEditor(initCanvas);
            return () => {
                initCanvas.dispose();
            };
        }
    }, [DesignInfo]);

    return (
        <div className='bg-secondary w-full h-screen flex items-center justify-center flex-col'>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={700}
                height={400}
                style={{ width: '700px', height: '400px', backgroundColor: '#fff' }}
            />
        </div>
    );
}

export default CanvasEditor;


