import { useState, useEffect } from 'react';
import { dur200 } from '../static/stylesVariable';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';

function Header() {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const tabs: { name: string; link: string }[] = [
    { name: 'HOME', link: '/' },
    { name: '주문대기', link: '/order-list' },
    { name: '주문현황', link: '/order-status' },
    { name: '서빙대기', link: '/serving-waiting' },
    { name: '서빙완료', link: '/serving-done' },
    { name: '매출', link: '/sales' },
  ];

  const [selectedTab, setSelectedTab] = useState<string>('');

  // On component mount or URL change, update the selected tab
  useEffect(() => {
    const matchingTab = tabs.find((tab) => tab.link === location.pathname);
    if (matchingTab) {
      setSelectedTab(matchingTab.name);
    }
  }, [location.pathname]);

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
