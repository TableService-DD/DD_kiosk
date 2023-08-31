import { useState } from 'react';
import { dur200 } from '../static/stylesVariable';

function Header() {
  const tabs: string[] = [
    'HOME',
    '주문대기',
    '주문현황',
    '서빙대기',
    '서빙완료',
    '매출',
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  return (
    <div className="flex items-center gap-2 mt-20 mb-[40px]">
      {tabs.map((tab) => (
        <button
          onClick={() => setSelectedTab(tab)}
          className={`
          ${selectedTab === tab ? 'text-active' : 'text-inActive'}
        w-[140px] text-[30px] bolder transition-colors ${dur200}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Header;
