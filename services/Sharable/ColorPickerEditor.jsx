import React from 'react'
import { ChromePicker, CirclePicker } from 'react-color'

function ColorPickerEditor({value, onColorChange}) {
  return (
    <div className='space-y-4'>
        <ChromePicker
        color={value}
        onChange={(e)=>onColorChange(e.hex)}
        className='border-r rounded-2xl mb-5'
        />

        <CirclePicker
        color={value}
        onChange={(e)=>onColorChange(e.hex)}
        />
    </div>
  )
}

export default ColorPickerEditor