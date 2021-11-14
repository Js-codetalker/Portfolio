import { useModal, MediaItem } from "@components/ui";
import css from "./PortfolioProjectModal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Asset } from "contentful";

SwiperCore.use([Pagination, Navigation, Keyboard]);
interface PortfolioProjectModalProps {
  assets: Asset[];
}
const usePortfolioModal = (): [
  () => void,
  React.FC<PortfolioProjectModalProps>
] => {
  const [toggleModal, Modal] = useModal();
  const PortfolioProjectModal: React.FC<PortfolioProjectModalProps> = ({
    assets,
  }) => {
    return (
      <Modal
        modalClasses={`${css.modal} md:min-w-750`}
        bodyClasses={css.modal__body}
      >
        <div className={css.modal__content}>
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            navigation
            className="w-full"
            slidesPerView={1}
            keyboard={{ enabled: true }}
            wrapperTag="ul"
          >
            {assets.length &&
              assets.map((asset) => (
                <SwiperSlide tag="li" key={asset.sys.id}>
                  <div className="w-full h-full relative">
                    <MediaItem
                      asset={asset}
                      videoClasses="w-full h-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Modal>
    );
  };

  return [toggleModal, PortfolioProjectModal];
};

export default usePortfolioModal;
