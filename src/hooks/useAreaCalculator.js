import { useState } from 'react';

export const useAreaCalculator = () => {
  const [shape, setShape] = useState('rectangle');
  const [dimensions, setDimensions] = useState({});
  const [result, setResult] = useState('');

  const shapes = {
    rectangle: { name: 'Retângulo', fields: ['width', 'height'] },
    square: { name: 'Quadrado', fields: ['side'] },
    circle: { name: 'Círculo', fields: ['radius'] },
    triangle: { name: 'Triângulo', fields: ['base', 'height'] },
    trapezoid: { name: 'Trapézio', fields: ['base1', 'base2', 'height'] }
  };

  const fieldLabels = {
    width: 'Largura',
    height: 'Altura',
    side: 'Lado',
    radius: 'Raio',
    base: 'Base',
    base1: 'Base maior',
    base2: 'Base menor'
  };

  const calculateArea = () => {
    const dims = dimensions;
    let area = 0;

    switch (shape) {
      case 'rectangle':
        area = parseFloat(dims.width || 0) * parseFloat(dims.height || 0);
        break;
      case 'square':
        area = Math.pow(parseFloat(dims.side || 0), 2);
        break;
      case 'circle':
        area = Math.PI * Math.pow(parseFloat(dims.radius || 0), 2);
        break;
      case 'triangle':
        area = (parseFloat(dims.base || 0) * parseFloat(dims.height || 0)) / 2;
        break;
      case 'trapezoid':
        area = ((parseFloat(dims.base1 || 0) + parseFloat(dims.base2 || 0)) * parseFloat(dims.height || 0)) / 2;
        break;
    }

    setResult(area.toFixed(2));
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
    calculateArea,
    updateDimension,
    clear
  };
};