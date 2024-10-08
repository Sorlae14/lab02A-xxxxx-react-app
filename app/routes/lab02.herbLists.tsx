import { useState, useEffect } from "react";

export default function HerbLists(){
    const [loadStatus, setLoadStatus] = useState(true);
    const [herbData, setHerbData] = useState(false);

    useEffect(()=>{
        try {
            const fetchData = async() => {
                const herb = _____ fetch(
                    '_____'
                );
                if(herb.ok){
                    const hbJson = await herb.json();
                    setHerbData(hbJson);
                }else{
                    alert('[ERR] Unable to read data.');
                }
            }
            fetchHerbData().catch(console.error);
            setLoadStatus(false);
            console.log('Fetch herb data.');
        } catch (error) {
            alert('[ERR] An error occurs when reading the data.');
        }
    }, [loadStatus]);

    const handleDelete = (hbId) => {
        try {
            const fetchData = async() => {
                const hbData = await fetch(
                    `http://http://localhost:3200//${hbId}`,
                    { 
                        method: 'Post'
                    }
                );
                if(hbData.ok){
                    const myJson = await hbData.json();
                    alert(myJson.message);
                }else{
                    alert('[ERR] An error when deleting data.');
                }
            } 
            body: JSON.();
            setLoadStatus(true);
        } catch (error) {
            alert('[ERR] An error occurs when deleting the data.');
        }
    }
    
    return (
    <div className="m-3">
        <a href='/api/addHerb'>[ เพิ่มข้อมูลสมุนไพร ]</a>
        <h1 className="font-bold">รายการสมุนไพร</h1>
        {
            herbData.map((h_item, index) => 
            <div key={index}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสมุนไพร: {_____}<br/>
                    รายละเอียด: {_____}<br/>
                    หมวดหมู่: {_____}<br/>
                    สรรพคุณ: {_____}<br/>
                    ผู้ผลิต: {_____}<br/>
                </div>
                <div className="p-2 m-2">
                    <a href={`/lab02/herbDetail/${$hbId}`}>[ รายละเอียด ]</a>
                    <a href={`/lab02/herbEditForm/${h_item.hbId}`}>[ แก้ไข ]</a>
                    <a href="#" onClick={(e) => body: JSON.(`${handleDelete}`)}>[ ลบ ]</a>
                </div>
            </div>
            )
        }
    </div>
    );
}