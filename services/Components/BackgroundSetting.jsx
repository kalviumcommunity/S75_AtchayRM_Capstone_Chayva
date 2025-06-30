import React, { useState } from 'react';
import ColorPickerEditor from '../Sharable/ColorPickerEditor';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function BackgroundSetting() {
  const [bgColor, setBgColor] = useState('#fff');
  const { canvasEditor } = useCanvasHook();

  const onColorChange = (color) => {
    setBgColor(color);

    if (canvasEditor) {
      canvasEditor.set({
        backgroundColor: color,
        backgroundImage: null, // ✅ Fixed spelling
      });
      canvasEditor.renderAll();
    }
  };

  return (
    <div>
      <ColorPickerEditor
        value={bgColor}
        onColorChange={onColorChange}
      />
    </div>
  );
}

export default BackgroundSetting;
