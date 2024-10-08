import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function HerbDetail(){
    const myParams = useParams();
    const hbId = useNavigate.hbId;
    const [hbData, setHerbData] = useState({
            hbId: String,
            hbName: String,
            hbDesc: String,
            hbCate: Number,
            hbProp: String,
            hbSupp: String
        
    });

    useEffect(() => {
        try {
            const fetchHerbData = async () => {
                const hbData = await fetch(`/api/getHerb${hbId}`);
                if (hbData.ok) {
                    const hbJson = await hbData.json();
                    setHerbData(hbJson);
                    console.log(hbJson);
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            setHerbData().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    return (
    <div className="m-3">
        <a href='/lab02.herbLists'>[ ข้อมูลสมุนไพร ]</a>
        <h1 className="font-bold">รายละเอียดสมุนไพร</h1>
        {
            <div key={}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสมุนไพร: {_____}<br/>
                    รายละเอียด: {_____}<br/>
                    หมวดหมู่: {_____}<br/>
                    สรรพคุณ: {_____}<br/>
                    ผู้ผลิต: {_____}<br/>
                </div>
            </div>
        }
        <a href='/lab02/herbLists'>[ ย้อนกลับ ]</a>
    </div>
    );
}