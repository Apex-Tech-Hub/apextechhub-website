"use client";

// global components
import Header from './global/Header';
import Footer from './global/Footer';

// components
import { PortfolioPDF } from './PortfolioPDF';

// types
interface portfolio {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
}

interface AllPortfolioProps {
  active: string;
  portfolio: portfolio[];
}


export default function AllPortfolio({ active, portfolio }: AllPortfolioProps) {
  return (
    <div className="mt-30">
      <Header active={active} />
      <h1 className="text-5xl font-bold text-center mb-10">Our Partners</h1>

      <div className="flex flex-col gap-10">
        {portfolio.map((item) => (
          <PortfolioPDF 
          key={item.id} 
          portfolio={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
};