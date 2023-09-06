import React from 'react';
import { useFetchTables } from '../hooks/useFetchTables';
import useCurrentTime from '../hooks/useCurrentTime';
const ROWS_STYLE = 'h-12 flex items-center justify-center';

function ServeStatus() {
  const { tables, setTables, error } = useFetchTables();
  const currentTime = useCurrentTime();
  if (error) {
    return <p className="text-red-600">Error: {error.message}</p>;
  }

  return (
    <section className="p-5">
      <div className="grid grid-cols-[1fr,2fr,1fr,1fr,4fr] gap-4 border-b-2 pb-3 mb-5 text-center text-2xl bolder">
        <h3>주문 시간</h3>
        <h3>메뉴</h3>
        <h3>수량</h3>
        <h3>테이블 번호</h3>
        <h3>주문 상태</h3>
      </div>

      <div className="grid grid-cols-[1fr,2fr,1fr,1fr,4fr] gap-4 text-center text-xl">
        {tables.map((table) =>
          table.orders.map((order, index) => (
            <React.Fragment key={index}>
              <span className={`${ROWS_STYLE} lighter text-lg tracking-wider`}>
                {currentTime}
              </span>
              <span className={ROWS_STYLE}>{order.dish}</span>
              <span className={ROWS_STYLE}>{order.quantity}</span>
              <span className={ROWS_STYLE}>{table.table_number}번</span>
              <button
                className={`${ROWS_STYLE} bg-gray-300 text-black hover:text-white hover:bg-[#464646] w-1/3 mx-auto rounded-[10px] semibolder`}
              >
                서빙대기
              </button>
            </React.Fragment>
          )),
        )}
      </div>
    </section>
  );
}

export default ServeStatus;
