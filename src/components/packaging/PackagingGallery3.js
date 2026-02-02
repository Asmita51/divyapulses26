import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

import a1 from "../../images/gallery/1.jpg";
import a2 from "../../images/gallery/2.jpg";
import a3 from "../../images/gallery/3.jpg";
import a4 from "../../images/gallery/4.jpg";
import a5 from "../../images/gallery/5.jpg";
import a6 from "../../images/gallery/6.jpg";
import a7 from "../../images/gallery/7.jpg";
import a8 from "../../images/gallery/8.jpg";
import a9 from "../../images/gallery/9.jpg";
import a10 from "../../images/gallery/10.jpg";
import a11 from "../../images/gallery/11.jpg";
import a12 from "../../images/gallery/12.jpg";
import a13 from "../../images/gallery/13.jpg";
import a14 from "../../images/gallery/14.jpg";
import a15 from "../../images/gallery/15.jpg";
import a16 from "../../images/gallery/16.jpg";
import a17 from "../../images/gallery/17.jpg";
import a18 from "../../images/gallery/18.jpg";
import a19 from "../../images/gallery/19.jpg";
import a20 from "../../images/gallery/20.jpg";
import a21 from "../../images/gallery/21.jpg";
import a22 from "../../images/gallery/22.jpg";
import a23 from "../../images/gallery/23.jpg";
import a24 from "../../images/gallery/24.jpg";

const images = [
  a23, a24, a19, a20, a22, a21, a1,
  a2,a3,a4,a5,a6,a7,a8, a9, a10, a11, a12, a13,
  a14, a15, a16, a17, a18
];

const PackagingGallery3 = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="section-padding" style={{ zIndex: 555 }}>
        <div className="container mb-5 pack">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionTitle title="A GLIMPSE OF OUR COMPANY" subtitle={'Gallery'}/>
            </div>
          </div>

          {/* ===== GALLERY GRID ===== */}
          <div className="row g-3 mt-4">
            {images.map((img, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-4 col-xl-3">
                <div
                  className="card shadow-sm h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveIndex(index);
                    setShow(true);
                  }}
                >
                  <img src={img} alt="" className="img-fluid rounded" style={{height:'250px'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MODAL ===== */}
        {show && (
          <div
            className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,0.85)" }}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-body position-relative text-center">

                  {/* Close */}
                  <button
                    className="btn btn-light position-absolute top-0 end-0 m-3"
                    onClick={() => setShow(false)}
                  >
                    ✕
                  </button>

                  {/* Prev */}
                  <button
                    className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
                    onClick={prevImage}
                  >
                    ‹
                  </button>

                  {/* Image */}
                  <img
                    src={images[activeIndex]}
                    alt=""
                    className="img-fluid rounded shadow"
                    style={{ height: "70vh" }}
                  />

                  {/* Next */}
                  <button
                    className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                    onClick={nextImage}
                  >
                    ›
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default PackagingGallery3;