const OfficeLocations = () => {
  return (
    <section className="container py-5">
      <div className="row g-4">

        {/* LEFT – HEAD OFFICE */}
        <div className="col-lg-6">
          <div className="border rounded p-3 h-100">

            {/* Map */}
            <div className="ratio ratio-16x9 mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.533941015882!2d55.6773343143331!3d25.55389698373152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMzJzE0LjAiTiA1NcKwNDAnNDYuMyJF!5e0!3m2!1sen!2sae!4v1554360278578!5m2!1sen!2sae"
                title="Divya Industries Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Content */}
            <h5 className="fw-bold mb-1">
              DIVYA INDUSTRIES GRAIN PROCESSING & PACKING LLC
            </h5>
            <p className="text-muted fw-semibold mb-2">HEAD OFFICE</p>

            <p className="mb-1">
              📍 New Saniya Umm Al Thoub, Umm Al Quawain.
            </p>
            <p className="mb-1">
              ✉️ <a href="mailto:info@divyapulses.com">info@divyapulses.com</a>
            </p>
            <p className="mb-0">
              📞 <a href="tel:+971504993076">+971 504993076</a>
            </p>
          </div>
        </div>

        {/* RIGHT – BRANCH OFFICE */}
        <div className="col-lg-6">
          <div className="border rounded p-3 h-100">

            {/* Map */}
            <div className="ratio ratio-16x9 mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0869425172414!2d55.29191177531769!3d25.26766057766567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43d45327ae79%3A0x30ef62c3641125b2!2sBUNTY%20FOODSTUFF%20TR%20CO%20LLC.%20%2F%20DIVYA%20PULSES!5e0!3m2!1sen!2sus!4v1769081687983!5m2!1sen!2sus"
                title="Bunty Foodstuff Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Content */}
            <h5 className="fw-bold mb-1">
              BUNTY FOODSTUFF TR. CO. L.L.C.
            </h5>
            <p className="text-muted fw-semibold mb-2">BRANCH OFFICE</p>

            <p className="mb-1">
              📍 Al Ras, Dubai - U.A.E.
            </p>
            <p className="mb-1">
              ✉️ <a href="mailto:info@divyapulses.com">info@divyapulses.com</a>
            </p>
            <p className="mb-0">
              📞 <a href="tel:+971504993076">+971 504993076</a>,{" "}
              <a href="tel:+97142265165">04-2265165</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfficeLocations;
