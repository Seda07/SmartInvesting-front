import React from 'react';
import FilterSection from './FilterSection';
import MainSection from './MainSection';

const Company = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <FilterSection />
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold">Título de la Página</h1>
        </header>
        <MainSection />
      </div>
    </div>
  );
};

export default Company;
