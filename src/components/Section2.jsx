import { useEffect, useState } from "react";

const Section2 = () =>{
  const imgUrlList = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-small-white-rabbit-in-the-grass-image_2915502.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-small-white-rabbit-in-the-grass-image_2915502.jpg",
  ];

  // 함수 ----------------------
  

  // style ----------------------
  const titleStyle = { fontSize: "3rem", lineHeight: "5rem" };
  return (
    <section className="md:bg-gray-50 relative md:overflow-visible overflow-hidden mt-20 flex justify-between flex-wrap" id="wrap">
      <div className="md:flex md:h-full justify-around max-w-[1920px] w-full h-[75rem] m-auto">
        <div className="flex-1 section-padding">
          <h1 className="font-extrabold" style={titleStyle}>
            네이버클라우드는 <br />
            다양한 산업과 <br />
            규모에 맞춘 <br />
            솔루션과 서비스로 <br />
            고객의 비즈니스를 <br />
            성공으로 이끕니다
          </h1>
          <button className="mt-16 app-black-btn">서비스 바로가기</button>
        </div>
        <div className=" md:relative md:z-0 md:left-0 flex-1 flex section-screen-h overflow-hidden absolute right-0 top-0 z-[-9]">
          <ul className="service-banner-from-img-animation">
            {
                imgUrlList.map((element,index)=>{
                    return <li key={index} className="mt-10 w-[28rem] h-[35rem] bg-slate-200 rounded-3xl"></li>
                })
            }
          </ul>
          <ul className="ml-10 service-banner-back-img-animation">
            {
                imgUrlList.map((element,index)=>{
                    return <li key={index} className="mt-10 w-[28rem] h-[35rem] bg-slate-200 rounded-3xl"></li>
                })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Section2;