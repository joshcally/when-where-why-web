import { useState, useEffect } from "react";
import Papa from "papaparse"

export default function useCountries(region, month) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

      try {

        setLoading(true);

        let filepath = encodeURI('assets/When Where Why - ' + month.toLowerCase() + '.csv');
        Papa.parse(filepath, {
          download: true,
          header: true,
          complete: result => {
            let dictionary = Object.fromEntries(result.data.map(x => [x.code, { 'name': x.name, 'temperature': x.temperature, 'precipitation': x.precipitation, 'summary': x.summary, 'description': x.description }]));
            setResults(dictionary);
            setLoading(false);
          }
        });


      } catch (err) {
        console.warn(err);
        setLoading(false);
      };
  }, [region, month]);

  function fetchAndCacheCountries(region, month) {
    switch (month) {
      case 'JAN' : {
        return { 'AL': { 'weather': 'COLD', 'description': '❄️🥶' }, 'BR': { 'weather': 'WARM', 'description': '☀️' }, 'DE': { 'weather': 'COLD', 'description': '❄️🥶️' }, 'ES': { 'weather': 'CHILLY', 'description': '☀️' }, 'FR': { 'weather': 'COLD', 'description': '❄️🥶' }, 'IT': { 'weather': 'COLD', 'description': '❄️🥶' }};
      }
      case 'FEB' : {
        return { 'AL': { 'weather': 'COLD', 'description': '❄️🥶' }, 'BR': { 'weather': 'WARM', 'description': '☀️' }, 'DE': { 'weather': 'COLD', 'description': '❄️🥶️Its not as sweltering as Rio, but the German Carnival is still a good excuse for a party. Ski resorts are busiest thanks to school holidays; make reservations.' }, 'ES': { 'weather': 'CHILLY', 'description': '🥶️️' }, 'FR': { 'weather': 'COLD', 'description': '❄️🥶 Crisp, cold weather in the mountains - lots of china-blue skies now - translates as ski season in top gear. Alpine resorts get mobbed by families during the February school holidays and accommodation is at its priciest.' }, 'IT': { 'weather': 'COLD', 'description': '❄️🥶️\nShort and accursed is how Italians describe February. In the mountains the ski season hits its peak in line with school holidays. Further south its chilly, but almond trees blossom and herald the carnival season.' }};
      }
      case 'MAR' : {
        return { 'AL': { 'weather': 'COLD', 'description': '❄️🥶' }, 'BR': { 'weather': 'WARM', 'description': '☀️' }, 'DE': { 'weather': 'COLD', 'description': '❄️🥶️' }, 'ES': { 'weather': 'CHILLY', 'description': '☀️' }, 'FR': { 'weather': 'COLD', 'description': '❄️🥶' }, 'IT': { 'weather': 'COLD', 'description': '❄️🥶️\nThe weather in March is capricious: sunny, rainy and windy all at once. The official start of spring is 21 March, but the holiday season starts at Easter.' }};
      }
      case 'APR' : {
        return { 'AL': { 'weather': 'CHILLY', 'description': '🥶' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'CHILLY', 'description': '☀️' }, 'ES': { 'weather': 'PERFECT', 'description': '☀️' }, 'FR': { 'weather': 'CHILLY', 'description': '🥶' }, 'IT': { 'weather': 'CHILLY', 'description': '🥶' }};
      }
      case 'MAY' : {
        return { 'AL': { 'weather': 'PERFECT', 'description': '☀️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'PERFECT', 'description': '☀️' }, 'ES': { 'weather': 'PERFECT', 'description': '☀️' }, 'FR': { 'weather': 'CHILLY', 'description': '☀️' }, 'IT': { 'weather': 'CHILLY', 'description': '☀️' }};
      }
      case 'JUN' : {
        return { 'AL': { 'weather': 'PERFECT', 'description': '☀️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'PERFECT', 'description': 'Germanys festival pace quickens, while gourmets can rejoice in the bounty of fresh, local produce in the markets. Life moves outdoors as the summer solstice means the sun doesnt set until around 9.30pm.️' }, 'ES': { 'weather': 'PERFECT', 'description': '☀️' }, 'FR': { 'weather': 'PERFECT', 'description': '☀️\nAs midsummer approaches, the festival pace quickens alongside a rising temperature gauge, which tempts the first bathers into the sea. Looking north, nesting white storks shower good luck on farmsteads in Alsace.' }, 'IT': { 'weather': 'PERFECT', 'description': '☀️\nThe summer season kicks off in June. The temperature cranks up quickly, beaches start to open in earnest and some of the big summer festivals commence. Republic Day, on 2 June, is a national holiday.' }};
      }
      case 'JUL' : {
        return { 'AL': { 'weather': 'WARM', 'description': '☀️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'PERFECT', 'description': '☀️' }, 'ES': { 'weather': 'WARM', 'description': '🥵' }, 'FR': { 'weather': 'PERFECT', 'description': '☀️' }, 'IT': { 'weather': 'WARM', 'description': '🥵️' }};
      }
      case 'AUG' : {
        return { 'AL': { 'weather': 'WARM', 'description': '☀️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'PERFECT', 'description': '☀️' }, 'ES': { 'weather': 'WARM', 'description': '🥵' }, 'FR': { 'weather': 'PERFECT', 'description': '☀️' }, 'IT': { 'weather': 'WARM', 'description': '🥵️' }};
      }
      case 'SEP' : {
        return { 'AL': { 'weather': 'PERFECT', 'description': '☀️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'PERFECT', 'description': '☀️' }, 'ES': { 'weather': 'PERFECT', 'description': '☀️' }, 'FR': { 'weather': 'PERFECT', 'description': '☀️' }, 'IT': { 'weather': 'PERFECT', 'description': '☀️' }};
      }
      case 'OCT' : {
        return { 'AL': { 'weather': 'CHILLY', 'description': '🥶️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'CHILLY', 'description': '☀️' }, 'ES': { 'weather': 'PERFECT', 'description': '☀️' }, 'FR': { 'weather': 'CHILLY', 'description': '🥶️' }, 'IT': { 'weather': 'PERFECT', 'description': '☀️' }};
      }
      case 'NOV' : {
        return { 'AL': { 'weather': 'COLD', 'description': '🥶️' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'COLD', 'description': '☀️' }, 'ES': { 'weather': 'CHILLY', 'description': '🥶️️' }, 'FR': { 'weather': 'COLD', 'description': '🥶️' }, 'IT': { 'weather': 'CHILLY', 'description': '🥶️' }};
      }
      case 'DEC' : {
        return { 'AL': { 'weather': 'COLD', 'description': '❄️🥶' }, 'BR': { 'weather': 'PERFECT', 'description': '☀️' }, 'DE': { 'weather': 'COLD', 'description': '❄️🥶️' }, 'ES': { 'weather': 'CHILLY', 'description': '🥶️️' }, 'FR': { 'weather': 'COLD', 'description': '🥶️' }, 'IT': { 'weather': 'COLD', 'description': '🥶️' }};
      }
    }
  };

  return { loading, results };
}
