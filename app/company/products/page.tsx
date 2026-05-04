"use client";

// components
import AllPortfolio from '@/components/AllPortfolio';

// data
import { portfolio } from './data';

export default function Page() {
  
  return <AllPortfolio {...portfolio} />;
};

