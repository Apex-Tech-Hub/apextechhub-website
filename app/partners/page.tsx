import React from 'react';

// components
import { AllPartners } from '@/components/AllPartners';

// data
import { partners } from './data';

export default function Page(){
  return <AllPartners {...partners} />;
};

