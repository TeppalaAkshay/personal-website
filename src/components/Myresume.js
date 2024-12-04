import React from "react";


const MyResume = () => {
    const handleClick = () => {
        const pdfUrl = '/Akshay Kumar Teppala LinkedIn.pdf';
        window.open(pdfUrl, '_blank');
    };

   


return (
    <div>
        <button onClick={handleClick}>View My Resume</button>
        
    </div>

);

};

export default MyResume;