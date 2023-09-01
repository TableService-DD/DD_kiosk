import { dur300 } from '../static/stylesVariable';
import { Table } from '../util/types';

type Props = {
  table: Table;
  onDetailClick: (table: Table) => void;
  isSelected: boolean;
};

function TableCard({ table, onDetailClick, isSelected }: Props) {
  const displayedOrders = table.orders.slice(0, 3);
  const additionalCount = table.orders.length - 3;

  return (
    <div
      className={`${
        isSelected ? 'border-primary border-4' : ''
      } bg-Gray01 text-white rounded-md w-[160px] h-[160px] flex flex-col overflow-hidden relative group hover:bg-Gray02 transition ${dur300}`}
    >
      <h1 className="w-full bg-Gray02 py-1 text-center text-white text-[17px] bolder mb-1">
        테이블 {table.table_number}
      </h1>
      <div className="flex flex-col gap-[2px] overflow-hidden px-6 py-1">
        {displayedOrders.map((order, index) => (
          <div
            className="flex justify-between items-center truncate"
            key={index}
          >
            <span className="text-[14px]">{order.dish}</span>
            <span className="text-[14px]">{order.quantity}</span>
          </div>
        ))}
        {additionalCount > 0 && (
          <span className="text-primary text-md bolder rounded-full">
            {' '}
            + {additionalCount}
          </span>
        )}
      </div>
      <div
        className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-70 transition duration-300 cursor-pointer"
        onClick={() => onDetailClick(table)}
      >
        <span className="text-white text-xl">자세히 보기</span>
      </div>
    </div>
  );
}

export default TableCard;
