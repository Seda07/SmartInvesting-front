import React from 'react';
import Filter from './Filter';

const FilterSection = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-8">
    <h2 className="text-xl font-semibold mb-4">Filtros</h2>
    <div className="flex flex-wrap gap-4">
      <Filter
        id="filter1"
        label="Filtro 1"
        type="select"
        options={['Opción 1', 'Opción 2', 'Opción 3']}
      />
      <Filter
        id="filter2"
        label="Filtro 2"
        type="text"
        placeholder="Ingrese valor"
      />
      <Filter
        id="filter3"
        label="Filtro 3"
        type="text"
        placeholder="Ingrese valor"
      />
    </div>
  </div>
);

export default FilterSection;
