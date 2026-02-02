import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

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

const images = [
  a1, a2, a3, a4, a5, a6, a7,
  a8, a9, a10, a11, a12, a13,
  a14, a15, a16, a17, a18, a19,
  a20, a21, a22, a23, a24, a25, a26
];

const PackagingGallery2 = () => {
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
      <section className="orico-partners-section redpack" style={{ zIndex: 555 }}>
        <div className="container mb-5 pack">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionTitle title="PACKAGING" col="#fff"  />
            </div>
          </div>

          {/* ===== GALLERY GRID ===== */}
          <div className="row g-3 mt-4">
            {images.map((img, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div
                  className="card shadow-sm h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveIndex(index);
                    setShow(true);
                  }}
                >
                  <img src={img} alt="" className="img-fluid rounded" />
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

export default PackagingGallery2;