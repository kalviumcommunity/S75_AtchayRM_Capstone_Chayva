import { UserButton } from '@stackframe/stack';
import React from 'react';
import Image from 'next/image';

function DesignHeader({ DesignInfo }) {
  return (
    <div className="p-1 flex items-center justify-between bg-gradient-to-r from-[#2b3338] via-[#36454F] to-[#495961] shadow-lg sticky top-0 z-50">
      <Image className='pl-2' src={'/chavyass.png'} alt="Chayva logo" width={120} height={100}  />
      <input
        placeholder="Design name"
        className="text-white border-none outline-none bg-transparent"
        value={DesignInfo?.name ?? ''}
        readOnly // Remove this if the input should be editable
      />
      <UserButton />
    </div>
  );
}

export default DesignHeader;