import React from 'react';
import { Partner } from './Partner';
import Header from './global/Header';
import Footer from './global/Footer';

interface partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

interface AllPartnersProps {
  active: string;
  partners: partner[];
}

export const AllPartners: React.FC<AllPartnersProps> = ({ active, partners }) => {
  return (
    <div className="mt-30">
        <Header active={active}/>
        <h1 className="text-5xl font-bold text-center mb-10">Our Partners</h1>
        <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
            <Partner key={partner.id} partner={partner} />
            ))}
        </div>
        {partners.length === 0 && (
            <p className="text-gray-500 text-center py-12">No partners to display</p>
        )}
      < Footer />
    </div>
  );
};