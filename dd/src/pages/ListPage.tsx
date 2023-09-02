import InfoBannerList from '../components/InfoBannerList';
import OrderListSection from '../components/OrderListSection';

function ListPage() {
  return (
    <section className="flex flex-col">
      <InfoBannerList />
      <div className="my-2" />
      <OrderListSection />
    </section>
  );
}

export default ListPage;
