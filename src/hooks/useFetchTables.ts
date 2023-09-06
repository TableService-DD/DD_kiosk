import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tables } from '../util/types';

export const useFetchTables = () => {
  const [tables, setTables] = useState<Tables>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get<Tables>('/data/tables.json')
      .then((response) => {
        const tables: Tables = response.data;
        setTables(tables);
      })
      .catch((error) => {
        console.error('There was an error fetching data:', error);
        setError(error);
      });
  }, []);

  return { tables, setTables, error };
};
