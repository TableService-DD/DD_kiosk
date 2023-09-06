import React from 'react';
import { Table } from '../util/types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import TitleBtn from './minicomponents/TitleBtn';

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
    <div className="flex flex-col text-white">
      {selectedTable ? (
        <>
          <h2 className="text-[27px] semibolder mb-3">
            {selectedTable.table_number}번 테이블
          </h2>
          <div className="flex flex-col gap-3 p-4 h-[350px] bg-Gray02 overflow-y-scroll rounded-md border-2 border-Gray05 mb-4">
            {selectedTable.orders.map((order, index) => (
              <div
                className="grid grid-cols-[3fr,1fr,3fr,1fr] gap-4 items-center text-xl"
                key={index}
              >
                <span className="text-left">{order.dish}</span>
                <span className="text-center">x {order.quantity}</span>
                <span className="text-right">{order.price}원</span>
                <span
                  className="cursor-pointer text-Gray04 text-right"
                  onClick={() =>
                    onRemoveOrder(selectedTable.table_number, order.dish)
                  }
                >
                  <AiOutlineCloseCircle size={22} />
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-right text-[28px] semibolder mb-4">
            총 {totalPrice}원
          </h2>
          <div className="flex flex-col gap-4">
            <TitleBtn title="주문추가" />
            <TitleBtn title="결제확인" />
          </div>
        </>
      ) : (
        <p>테이블을 선택해 주세요.</p>
      )}
    </div>
  );
};

export default SelectedTableInfo;
