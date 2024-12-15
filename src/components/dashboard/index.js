// import { useEffect, useState } from "react";
import Card from '../@shared/card';
// import Table from '../@shared/table';
// import { FetchDataList } from '../../utils/fetchDataList';
import customData from '../../customData.json';

const Dashboard = () => {
    // const [rowData, setRowData] = useState([]);
    // const [columnData, setColumnData] = useState([]);
    // const URL = '/express_backend';
    // useEffect(() => {
    //     return () => {
    //         FetchDataList(URL).then((res) => {
    //             setRowData(Object.keys(res.dashboardTable[0]));
    //             setColumnData(res.dashboardTable);
    //         }).catch(error => error);
    //     };
    // }, [URL]);

    const cardList = customData && customData?.cardList;

    return (<>
        {cardList && <section className="container"> 
            <Card data={cardList} />
        </section>}
        {/* <Table rowData={rowData} columnData={columnData} /> */}
    </>);
}

export default Dashboard;
