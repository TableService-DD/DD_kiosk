type InfoBannerProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
};

const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="flex items-center justify-between w-full h-[150px] lg:h-[130px] bg-Gray08 rounded-[20px]">
      <article className="flex flex-col gap-1 pl-[30px] py-[30px]">
        <p>
          {title}
          <br />
          <span className="text-[22px] semibolder">{subtitle}</span>
        </p>
        <span className="text-[14px]">Home탭에서 사용 가능</span>
      </article>
      <img className="object-cover" src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default InfoBanner;
