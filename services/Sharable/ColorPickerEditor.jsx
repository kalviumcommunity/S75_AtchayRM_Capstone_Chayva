import React from 'react'
import { ChromePicker, CirclePicker } from 'react-color'

function ColorPickerEditor({value, onColorChange}) {
  return (
    <div className='space-y-4'>
        <ChromePicker
        color={value}
        onChange={(e)=>onColorChange(e.hex)}
        className=''
        />

        <CirclePicker
        color={value}
        onChange={(e)=>onColorChange(e.hex)}
        />
    </div>
  )
}

export default ColorPickerEditor