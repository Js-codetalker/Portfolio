import { useModal, MediaItem, TechIcon, Link, Button } from "@components/ui";
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
  technologies: ("tailwindcss" | "next.js" | "sass" | "react.js")[];
  previewLink: string | undefined;
  githubLink: string | undefined;
  description: string;
}
const usePortfolioModal = (): [
  () => void,
  React.FC<PortfolioProjectModalProps>
] => {
  const [toggleModal, Modal] = useModal();
  const PortfolioProjectModal: React.FC<PortfolioProjectModalProps> = ({
    assets,
    technologies,
    previewLink,
    githubLink,
    description,
  }) => {
    return (
      <Modal
        modalClasses={`${css.modal} md:min-w-750 md:mt-40`}
        bodyClasses={`${css.modal__body} bg-black`}
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
          <div className="flex flex-center flex-col md:flex-row w-full bg-black">
            <div className="w-full max-w-450 p-20 h-full text-white">
              <div className="flex gap-10 h-full flex-col flex-center">
                <p className="text-center md:text-left">{description}</p>
                <div className="flex py-10 flex-center gap-10">
                  {previewLink && (
                    <Button className="px-15 sm:px-40" external Component="a" url={previewLink}>
                      View Project
                    </Button>
                  )}
                  {githubLink && (
                    <Button className="px-15 sm:px-40" external Component="a" url={githubLink}>
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col flex-nowrap py-20">
              <h3 className="text-white text-center">Build with:</h3>
              <div className="w-300 p-10 m-auto lg:m-0 grid grid-cols-3 grid-rows-2 gap-5">
                {technologies.length &&
                  technologies.map((technology, i) => (
                    <div className="flex flex-center" key={i}>
                      <TechIcon
                        width={50}
                        className="inline-block"
                        technology={technology}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  return [toggleModal, PortfolioProjectModal];
};

export default usePortfolioModal;
