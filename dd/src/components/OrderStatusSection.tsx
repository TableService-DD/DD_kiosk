import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useFetchTables } from '../hooks/useFetchTables';

function OrderStatusSection() {
  const { tables, setTables, error } = useFetchTables();

  if (error) {
    return <p className="text-red-600">Error: {error.message}</p>;
  }

  const handleRemoveOrder = (tableNumber: number, dish: string) => {
    const updatedTables = tables
      .map((table) => {
        if (table.table_number === tableNumber) {
          return {
            ...table,
            orders: table.orders.filter((order) => order.dish !== dish),
          };
        }
        return table;
      })
      .filter((table) => table.orders.length > 0); // Remove tables with no orders

    setTables(updatedTables);
  };

  return (
    <section className="flex flex-col gap-4">
      {tables.map((table) => (
        <div key={table.table_number} className="shadow-lg rounded-xl  p-5">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl semibolder mb-3">
                {table.table_number}번 테이블 주문 내역
              </h2>
              {table.orders.map((order, index) => (
                <div
                  className="flex items-center gap-4 justify-between text-xl"
                  key={index}
                >
                  <span className="text-left w-32">{order.dish}</span>
                  <span className="text-right">{order.quantity}개</span>
                  <button
                    className="text-red-500"
                    onClick={() =>
                      handleRemoveOrder(table.table_number, order.dish)
                    }
                  >
                    <AiOutlineCloseCircle size={22} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 py-2 justify-center">
              <button className="p-2 px-8 rounded-lg text-xl text-white bg-Red02">
                주문취소
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default OrderStatusSection;
