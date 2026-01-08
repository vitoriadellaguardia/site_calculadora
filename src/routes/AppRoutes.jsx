import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import ScientificCalculatorPage from '../pages/ScientificCalculatorPage.jsx';
import BasicCalculatorPage from '../pages/BasicCalculatorPage.jsx';
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage.jsx';
import BMICalculatorPage from '../pages/BMICalculatorPage.jsx';
import { InterestCalculatorPage, UnitConverterPage, DateCalculatorPage, AreaCalculatorPage, VolumeCalculatorPage } from '../pages/AllCalculatorPages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'scientific', element: <ScientificCalculatorPage /> },
      { path: 'basic', element: <BasicCalculatorPage /> },
      { path: 'percentage', element: <PercentageCalculatorPage /> },
      { path: 'bmi', element: <BMICalculatorPage /> },
      { path: 'interest', element: <InterestCalculatorPage /> },
      { path: 'converter', element: <UnitConverterPage /> },
      { path: 'date', element: <DateCalculatorPage /> },
      { path: 'area', element: <AreaCalculatorPage /> },
      { path: 'volume', element: <VolumeCalculatorPage /> }
    ]
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;