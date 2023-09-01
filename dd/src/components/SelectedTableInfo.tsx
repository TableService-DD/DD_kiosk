import React from 'react';
import { Table } from '../util/types';

type Props = {
  selectedTable: Table | null;
  onRemoveOrder: (tableNumber: number, dish: string) => void;
};

const SelectedTableInfo: React.FC<Props> = ({
  selectedTable,
  onRemoveOrder,
}) => {
  let totalPrice = 0;

  if (selectedTable) {
    totalPrice = selectedTable.orders.reduce((acc, order) => {
      return acc + order.quantity * order.price;
    }, 0);
  }

  return (
    <div className="flex flex-col gap-2 text-white">
      {selectedTable ? (
        <>
          <h2 className="text-[27px] semibolder">
            {selectedTable.table_number}번 테이블
          </h2>
          <div className="w-full h-[2px] bg-Gray05" />
          <div className="grid grid-cols-4 gap-2 px-4 ">
            {selectedTable.orders.map((order, index) => (
              <React.Fragment key={index}>
                <span className=" text-left">{order.dish}</span>
                <span className=" text-center">X {order.quantity}</span>
                <span className=" text-right">{order.price}원</span>
                <button
                  onClick={() =>
                    onRemoveOrder(selectedTable.table_number, order.dish)
                  }
                >
                  X
                </button>
              </React.Fragment>
            ))}
            <span>TOTAL</span>
            <span className="col-span-2 text-right">{totalPrice}원</span>
          </div>
        </>
      ) : (
        <p>테이블을 선택해 주세요.</p>
      )}
    </div>
  );
};

export default SelectedTableInfo;
