import CarouselComponent from '../components/CarouselComponent';
import Header from '../components/Header';

function Sales() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen bg-black -z-10" />
      <Header />

      <CarouselComponent />
    </>
  );
}

export default Sales;
