import { useState, useEffect } from 'react';
import axios from 'axios';
import TableCard from '../components/TableCard';
import { Table, Tables } from '../util/types';
import SelectedTableInfo from '../components/SelectedTableInfo';
import { handleDetailClick, handleRemoveOrder } from '../util/tableUtils';

function Home() {
  const [tables, setTables] = useState<Tables>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  useEffect(() => {
    axios
      .get<Tables>('/data/tables.json')
      .then((response) => {
        const tables: Tables = response.data;
        setTables(tables);
      })
      .catch((error) => {
        console.error('There was an error fetching data:', error);
      });
  }, []);
  const handleDetail = (table: Table) => {
    handleDetailClick(setSelectedTable, table);
  };
  const handleRemove = (tableNumber: number, dish: string) => {
    handleRemoveOrder(setTables, setSelectedTable, tables, tableNumber, dish);
  };

  return (
    <section>
      <div className="flex justify-between gap-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-[70%] h-[80vh] overflow-scroll bg-Gray05 rounded-md p-3">
          {tables.map((table, index) => (
            <TableCard
              key={index}
              table={table}
              onDetailClick={handleDetail}
              isSelected={selectedTable?.table_number === table.table_number}
            />
          ))}
        </div>
        <div className="w-[30%] bg-Gray01 px-5 py-10 rounded-md">
          <SelectedTableInfo
            onRemoveOrder={handleRemove}
            selectedTable={selectedTable}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
