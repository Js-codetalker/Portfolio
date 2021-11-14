import { IPortfolioProjectsListProjectFields } from "@cms/types";
import { Image, useModal } from "@components/ui";
import { useEffect, useRef } from "react";
import css from "./PortfolioProject.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Pagination, Navigation, Keyboard]);

interface PortfolioProjectProps {
  data: IPortfolioProjectsListProjectFields;
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({ data }) => {
  const {
    title,
    description,
    githubLink,
    previewLink,
    images,
    video,
    technologies,
    buttonText,
  } = data;
  const { toggleModal, Modal } = useModal();
  const ProjectModal: React.FC = () => {
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
            {images &&
              images.map((image) => (
                <SwiperSlide tag="li" key={image.sys.id}>
                  <div className="w-full h-full relative">
                    <Image
                      src={image.fields.file.url}
                      alt={image.fields.title ?? ""}
                      className={css.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            {video && (
              <SwiperSlide tag="li">
                <video
                  tabIndex={0}
                  controls
                  className="w-full h-full object-cover object-center"
                  src={video.fields.file.url}
                ></video>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </Modal>
    );
  };

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current && screen.availWidth < 1024) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(css.animate);
          } else {
            entry.target.classList.remove(css.animate);
          }
        });
      });
      observer.observe(overlayRef.current);
    }
  }, []);
  return (
    <>
      <li className="cursor-pointer"  onClick={toggleModal}>
        <div
          onMouseOver={() => {
            overlayRef.current?.classList.add(css.animate);
          }}
          onMouseLeave={() => {
            overlayRef.current?.classList.remove(css.animate);
          }}
          ref={overlayRef}
          className={css.project}
        >
          {images && (
            <Image
              key={images[0].sys.id}
              src={images[0].fields.file.url}
              alt={images[0].fields.title ?? ""}
              className={css.image}
            />
          )}
          <div className={css.info}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleModal();
              }}
            >
              {buttonText}
            </button>
          </div>
          <div className={css.slideAnimation}></div>
        </div>
      </li>
      <ProjectModal />
    </>
  );
};

export default PortfolioProject;
