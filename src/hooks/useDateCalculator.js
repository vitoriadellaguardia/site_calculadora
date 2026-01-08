import { useState } from 'react';

export const useDateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [addDays, setAddDays] = useState('');
  const [baseDate, setBaseDate] = useState('');
  const [difference, setDifference] = useState(null);
  const [addResult, setAddResult] = useState('');

  const calculateDifference = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffWeeks = Math.floor(diffDays / 7);
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffDays / 365.25);

      setDifference({
        days: diffDays,
        weeks: diffWeeks,
        months: diffMonths,
        years: diffYears
      });
    }
  };

  const addDaysToDate = () => {
    if (baseDate && addDays) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() + parseInt(addDays));
      setAddResult(date.toISOString().split('T')[0]);
    }
  };

  const clear = () => {
    setStartDate('');
    setEndDate('');
    setAddDays('');
    setBaseDate('');
    setDifference(null);
    setAddResult('');
  };

  return {
    startDate, setStartDate,
    endDate, setEndDate,
    addDays, setAddDays,
    baseDate, setBaseDate,
    difference,
    addResult,
    calculateDifference,
    addDaysToDate,
    clear
  };
};