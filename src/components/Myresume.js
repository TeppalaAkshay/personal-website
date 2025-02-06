import React from "react";


const MyResume = () => {
    const handleClick = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/Akshay Kumar Teppala   new RES.pdf';
        window.open(pdfUrl, '_blank');
    };

   


return (
    <div >
        <button onClick={handleClick}>View My Resume</button>
        
    </div>

);

};

export default MyResume;