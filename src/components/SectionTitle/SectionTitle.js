import React from 'react';

const SectionTitle = ({ title, subtitle ,desc, col}) => {
    return (
        <div className="orico-section-title">
            {subtitle &&  <span>“<span>{subtitle}</span>”</span>}
           
            <h2 className={col && 'text-white'}>{title}</h2>
            { desc && <p className='mt-4 '>{desc}</p> }
        </div>
    );
};

export default SectionTitle;