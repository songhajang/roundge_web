import IconBtn from "./btn/IconBtn";
import { FaMapMarkerAlt } from "react-icons/fa";

const Section3 = () =>{
    const noticeList = [
        {
            label : 'asdfasdfasdf',
            date: '2024.11.18'
        },
        {
            label : 'asdfasdfasdf',
            date: '2024.11.18'
        },
        {
            label : 'asdfasdfasdf',
            date: '2024.11.18'
        },
        {
            label : 'asdfasdfasdf',
            date: '2024.11.18'
        },
    ]

  // style ----------------------
  const titleStyle = { fontSize: "3rem", lineHeight: "4rem" };

    return (
      <section className="section-padding">
        <h1 className="font-extrabold" style={titleStyle}>
            네이버클라우드의 <br />
            새로운 소식을 만나 보세요
        </h1>
        <ul className="mt-20 flex md:justify-between justify-center flex-wrap">
            {noticeList.map((element, index)=>{
                return <li key={index}>
                    <div className="notice-item-wh rounded-3xl bg-slate-300"></div>
                    <h3 className="mt-5 text-[1.4rem] font-bold">{element.label}</h3>
                    <h5 className="mt-6 mb-10 md:mb-0 text-[1.2rem] text-gray-400">{element.date}</h5>
                </li>
            })}
        </ul>
      </section>
    );
}

export default Section3;