import { bannerItems } from '../static/data';
import InfoBanner from './InfoBanner';

const InfoBannerList: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col grid-cols-1 gap-2">
      {bannerItems.map((item, index) => (
        <InfoBanner
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
        />
      ))}
    </div>
  );
};

export default InfoBannerList;
