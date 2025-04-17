import { UserButton } from '@stackframe/stack';
import React from 'react';
import Image from 'next/image';

function DesignHeader({ DesignInfo }) {
  return (
    <div className="p-3 flex justify-between 
    bg-gradient-to-r from-sky-500 via-blue-400 to-purple-600
    ">
      <Image src={'/chayvaLogo.png'} alt="Chayva logo" width={100} height={60} />
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
