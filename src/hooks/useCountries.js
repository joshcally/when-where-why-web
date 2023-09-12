import { useState, useEffect } from "react";
import Jan from '../assets/jan.csv';
import Feb from '../assets/feb.csv';
import Mar from '../assets/mar.csv';
import Apr from '../assets/apr.csv';
import May from '../assets/may.csv';
import Jun from '../assets/jun.csv';
import Jul from '../assets/jul.csv';
import Aug from '../assets/aug.csv';
import Sep from '../assets/sep.csv';
import Oct from '../assets/oct.csv';
import Nov from '../assets/nov.csv';
import Dec from '../assets/dec.csv';


export default function useCountries(month) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let dictionary = Object.fromEntries(
          getCountryCsv(month).map(
                x => [x.code,
                      {
                          'name': x.name,
                          'temperature': x.temperature,
                          'precipitation': x.precipitation,
                          'summary': x.summary,
                          'description': x.description
                      }]));
    setResults(dictionary);
  }, [month]);

  function getCountryCsv(month) {
    switch (month) {
      case 'JAN': {
        return Jan;
      }
      case 'FEB': {
        return Feb;
      }
      case 'MAR': {
        return Mar;
      }
      case 'APR': {
        return Apr;
      }
      case 'MAY': {
        return May;
      }
      case 'JUN': {
        return Jun;
      }
      case 'JUL': {
        return Jul;
      }
      case 'AUG': {
        return Aug;
      }
      case 'SEP': {
        return Sep;
      }
      case 'OCT': {
        return Oct;
      }
      case 'NOV': {
        return Nov;
      }
      case 'DEC': {
        return Dec;
      }
      default: {
        return Jan;
      }
    }
  }

  return { results };
}
