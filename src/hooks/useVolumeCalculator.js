import { useState } from 'react';

export const useVolumeCalculator = () => {
  const [shape, setShape] = useState('cube');
  const [dimensions, setDimensions] = useState({});
  const [result, setResult] = useState('');

  const shapes = {
    cube: { name: 'Cubo', fields: ['side'] },
    rectangular: { name: 'Paralelepípedo', fields: ['length', 'width', 'height'] },
    sphere: { name: 'Esfera', fields: ['radius'] },
    cylinder: { name: 'Cilindro', fields: ['radius', 'height'] },
    cone: { name: 'Cone', fields: ['radius', 'height'] },
    pyramid: { name: 'Pirâmide', fields: ['base', 'height'] }
  };

  const fieldLabels = {
    side: 'Lado',
    length: 'Comprimento',
    width: 'Largura',
    height: 'Altura',
    radius: 'Raio',
    base: 'Área da base'
  };

  const calculateVolume = () => {
    const dims = dimensions;
    let volume = 0;

    switch (shape) {
      case 'cube':
        volume = Math.pow(parseFloat(dims.side || 0), 3);
        break;
      case 'rectangular':
        volume = parseFloat(dims.length || 0) * parseFloat(dims.width || 0) * parseFloat(dims.height || 0);
        break;
      case 'sphere':
        volume = (4/3) * Math.PI * Math.pow(parseFloat(dims.radius || 0), 3);
        break;
      case 'cylinder':
        volume = Math.PI * Math.pow(parseFloat(dims.radius || 0), 2) * parseFloat(dims.height || 0);
        break;
      case 'cone':
        volume = (1/3) * Math.PI * Math.pow(parseFloat(dims.radius || 0), 2) * parseFloat(dims.height || 0);
        break;
      case 'pyramid':
        volume = (1/3) * parseFloat(dims.base || 0) * parseFloat(dims.height || 0);
        break;
    }

    setResult(volume.toFixed(2));
  };

  const updateDimension = (field, value) => {
    setDimensions(prev => ({ ...prev, [field]: value }));
  };

  const clear = () => {
    setDimensions({});
    setResult('');
  };

  return {
    shape, setShape,
    dimensions,
    result,
    shapes,
    fieldLabels,
    calculateVolume,
    updateDimension,
    clear
  };
};