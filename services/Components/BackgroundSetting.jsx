import React, { useState } from 'react'
import ColorPickerEditor from '../Sharable/ColorPickerEditor'

function BackgroundSetting() {
  const [bgColor,setBgColor]=useState('#fff')
  return (
    <div>
        <ColorPickerEditor
        value={bgColor}
        onColorChange={(v)=>setBgColor(v)} />
    </div>
  )
}

export default BackgroundSetting