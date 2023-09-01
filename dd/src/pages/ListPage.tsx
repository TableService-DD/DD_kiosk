function ListPage() {
  return (
    <section className="flex flex-col">
      <div className="flex lg:flex-row flex-col grid-cols-1 gap-2">
        <div className="flex items-center justify-between w-full h-[150px] lg:h-[130px] bg-Gray08 rounded-[20px]">
          <article className="flex flex-col gap-1 pl-[30px] py-[30px]">
            <p>
              누락된 주문이 있을 때는
              <br />
              <span className="text-[22px] semibolder">
                주문추가 기능을 사용해보세요!
              </span>
            </p>

            <span className="text-[14px]">Home탭에서 사용 가능</span>
          </article>
          <img
            className=" object-cover"
            src="/images/3d/docu.png"
            alt="document"
          />
        </div>
        <div className="flex items-center justify-between w-full h-[150px] lg:h-[130px] bg-Gray08 rounded-[20px]">
          <article className="flex flex-col gap-1 pl-[30px] py-[30px]">
            <p>
              누락된 주문이 있을 때는
              <br />
              <span className="text-[22px] semibolder">
                주문추가 기능을 사용해보세요!
              </span>
            </p>

            <span className="text-[14px]">Home탭에서 사용 가능</span>
          </article>
          <img
            className=" object-cover"
            src="/images/3d/calcu.png"
            alt="document"
          />
        </div>
      </div>
    </section>
  );
}

export default ListPage;
