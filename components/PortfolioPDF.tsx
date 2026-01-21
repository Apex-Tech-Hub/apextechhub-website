import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

interface Portfolio {
  pdfUrl: string;
  fileName?: string;
  imageUrl: string;
  title: string;
  description: string;
  subtitle?: string;
}

interface PortfolioPDFProps {
  portfolio: Portfolio ;
}

export const PortfolioPDF: React.FC<PortfolioPDFProps> = ({ portfolio }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pdfUrl, fileName, imageUrl, title, description, subtitle } = portfolio;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName ?? 'portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-5">
      {/* Portfolio Card */}
      <div className="bg-black rounded-3xl shadow-2xl overflow-hidden max-w-full ">
        <div className="flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="md:w-3/5">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
            />
          </div>

          {/* Right - Content */}
          <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
            {subtitle && (
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Portfolio
              </button>
              
              <button
                onClick={handleDownload}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with PDF Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-black text-white">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="Portfolio PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

