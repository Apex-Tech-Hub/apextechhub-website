export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

import React from 'react';

interface PartnerProps {
  partner: Partner;
}

export const Partner: React.FC<PartnerProps> = ({ partner }) => {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-10 text-center flex flex-col gap-4">
      <div className='flex justify-center items-center '>
        <img 
          src={partner.logo} 
          alt={`${partner.name} logo`}
          className="w-52 h-36 object-contain rounded"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
      {partner.website && (
        <a 
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-600 hover:text-lime-900 font-medium"
        >
          Visit Website →
        </a>
      )}
    </div>
  );
};
