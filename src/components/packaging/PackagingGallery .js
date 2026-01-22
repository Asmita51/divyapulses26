import { useState } from "react";
import Ab from '../../images/about/ab.png'


const PackagingGallery = () => {
  const images = [
    {
      src: Ab,
      title: "Retail Pack",
    },
    {
      src: Ab,
      title: "Bulk Pack",
    },
    {
      src: Ab,
      title: "Export Carton",
    },
    {
      src: Ab,
      title: "Custom Packaging",
    },
  ];

  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setShow(true);
  };

  const closeModal = () => setShow(false);

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div
              className="card h-100 shadow-sm cursor-pointer"
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="mb-0">{img.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body text-center position-relative">

                {/* Close */}
                <button
                  className="btn btn-light position-absolute top-0 end-0 m-3"
                  onClick={closeModal}
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
                  src={images[activeIndex].src}
                  alt=""
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "80vh" }}
                />

                {/* Next */}
                <button
                  className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                  onClick={nextImage}
                >
                  ›
                </button>

                <div className="text-white mt-3">
                  {images[activeIndex].title}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackagingGallery;
