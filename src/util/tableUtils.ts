import { Table, Tables } from './types';

export const handleDetailClick = (
  setSelectedTable: React.Dispatch<React.SetStateAction<Table | null>>,
  table: Table,
) => {
  setSelectedTable(table);
  console.log('Selected Table: ', table);
};

export const handleRemoveOrder = (
  setTables: React.Dispatch<React.SetStateAction<Tables>>,
  setSelectedTable: React.Dispatch<React.SetStateAction<Table | null>>,
  tables: Tables,
  tableNumber: number,
  dish: string,
) => {
  const updatedTables = tables.map((table) => {
    if (table.table_number === tableNumber) {
      return {
        ...table,
        orders: table.orders.filter((order) => order.dish !== dish),
      };
    }
    return table;
  });
  setTables(updatedTables);
  setSelectedTable(
    updatedTables.find((table) => table.table_number === tableNumber) || null,
  );
};
