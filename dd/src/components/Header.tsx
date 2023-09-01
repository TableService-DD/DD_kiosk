import { useState } from 'react';
import { dur200 } from '../static/stylesVariable';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function Header() {
  const navigate: NavigateFunction = useNavigate();
  const tabs: { name: string; link: string }[] = [
    { name: 'HOME', link: '/' },
    { name: '주문대기', link: '/order-list' },
    { name: '주문현황', link: '/order-status' },
    { name: '서빙대기', link: '/serving-waiting' },
    { name: '서빙완료', link: '/serving-done' },
    { name: '매출', link: '/sales' },
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);

  return (
    <div className="flex items-center gap-2 mt-20 mb-[40px]">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {
            setSelectedTab(tab.name);
            navigate(tab.link);
          }}
          className={`
          ${selectedTab === tab.name ? 'text-active' : 'text-inActive'}
          w-[140px] text-[30px] bolder transition-colors ${dur200} text-left`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
