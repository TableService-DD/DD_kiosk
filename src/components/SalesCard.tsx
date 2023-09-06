export default function SaleCard({ title: string, number: number }) {
  const formattedNumber = new Intl.NumberFormat().format(number);
  return (
    <section className="flex flex-col w-full h-[70vh] justify-center items-center  text-white">
      <h1 className="text-[35px] font-bold text-white">주점 DIVE 매출</h1>
      <h1 className="bolder text-[90px]">{formattedNumber}원</h1>
    </section>
  );
}
