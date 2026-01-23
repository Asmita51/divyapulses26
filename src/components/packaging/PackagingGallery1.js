import React, { useRef, useState } from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";
// import GestureDemo from "./GestureController";
import GestureController from "./GestureController";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import a1 from "../../images/packaging/53.png";
import a2 from "../../images/packaging/54.png";
import a3 from "../../images/packaging/55.png";
import a4 from "../../images/packaging/56.png";
import a5 from "../../images/packaging/57.png";
import a6 from "../../images/packaging/58.png";
import a7 from "../../images/packaging/59.png";
import a8 from "../../images/packaging/60.png";
import a9 from "../../images/packaging/61.png";
import a10 from "../../images/packaging/62.png";
import a11 from "../../images/packaging/63.png";
import a12 from "../../images/packaging/64.png";
import a13 from "../../images/packaging/65.png";
import a14 from "../../images/packaging/66.png";
import a15 from "../../images/packaging/67.png";
import a16 from "../../images/packaging/68.png";
import a17 from "../../images/packaging/69.png";
import a18 from "../../images/packaging/70.png";
import a19 from "../../images/packaging/71.png";
import a20 from "../../images/packaging/72.png";
import a21 from "../../images/packaging/73.png";
import a22 from "../../images/packaging/74.png";
import a23 from "../../images/packaging/75.png";
import a24 from "../../images/packaging/76.png";
import a25 from "../../images/packaging/77.png";
import a26 from "../../images/packaging/78.png";


const PackagingGallery1 = () => {
const images = [
  a1, a2, a3, a4, a5, a6, a7,
  a8, a9, a10, a11, a12, a13,
  a14, a15, a16, a17, a18, a19,
  a20, a21, a22, a23, a24, a25, a26
];

  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 MAIN SLIDER REF (THIS WAS MISSING)
  const mainSliderRef = useRef(null);
  const modalSliderRef = useRef(null);

  /* MAIN SLIDER SETTINGS */
  const settings = {
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 700,
    infinite: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 6 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  /* MODAL SLIDER SETTINGS */
  const modalSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    speed: 600,
    initialSlide: activeIndex,
  };

  return (
    <>
      <section className="orico-partners-section redpack" style={{ zIndex: 555 }}>
        {/* ===== GALLERY ===== */}
        <div className="container mb-5 pack">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionTitle title={"Our Brands"} col={"#fff"} />
            </div>
          </div>

          {/* 🔥 GESTURE CONTROLLER CONNECTED TO MAIN SLIDER */}
<GestureController
  isModalOpen={show}
  onSwipeLeft={() => mainSliderRef.current?.slickPrev()}
  onSwipeRight={() => mainSliderRef.current?.slickNext()}
  onConfirm={(el) => {
    const index = el.dataset.index;
    setActiveIndex(Number(index));
    setShow(true);
  }}
  onCloseModal={() => setShow(false)}
/>



          {/* 🔥 MAIN SLIDER WITH REF */}
          <Slider ref={mainSliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <div
                  className="card shadow-sm gesture-selectable"
                  data-index={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveIndex(index);
                    setShow(true);
                  }}
                >
                  <img src={img} alt="" className="img-fluid" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ===== MODAL ===== */}
        {show && (
          <div
            className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,0.85)" }}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-body position-relative">
                  <button
                    className="btn btn-light position-absolute top-0 end-0 m-3"
                    style={{ zIndex: 9999 }}
                    onClick={() => setShow(false)}
                  >
                    ✕
                  </button>

                  <Slider ref={modalSliderRef} {...modalSettings}>
                    {images.map((img, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={img}
                          alt=""
                          className="img-fluid rounded shadow"
                          style={{ height: "70vh", margin: "0 auto" }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @media (max-width: 575px) {
            .pack .slick-prev:before,
            .pack .slick-next:before {
              display: none;
            }
          }
        .gesture-hover {
          outline: 3px solid #ffcc00;
          box-shadow: 0 0 15px rgba(255, 204, 0, 0.8);
        }

        `}</style>
      </section>
    </>
  );
};

export default PackagingGallery1;
