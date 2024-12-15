import React, { useState } from 'react';
import DisplayData from "./@table/DisplayData";
import UploadFile from "./@table/UploadFile";

export default function Test3() {
    const [uploadedExcelData, setUploadedExcelData] = useState([]);
    const uploadedExcelDataHandler = (data) => { console.log('data', data);
        setUploadedExcelData(data);
    };
    return (
        <div className="container">
        <UploadFile onUploadExcelFile={uploadedExcelDataHandler} />
        <DisplayData excelData={uploadedExcelData} />
        </div>
    );
};
