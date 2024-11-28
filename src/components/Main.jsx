import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [oldSelectIndex, setOldSelectIndex] = useState(-1);
  const [animationClass,setAnimationClass] = useState('');

  const imgUrlList = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-small-white-rabbit-in-the-grass-image_2915502.jpg",
  ];
  const titleList = [
    {
      title : 'test',
      subTitle: 'asdfasdfsdf',
      url : '#'
    },
    {
      title : 'test2',
      subTitle: 'asdfasdfsdf',
      url : '#'
    },
    {
      title : 'test3',
      subTitle: 'asdfasdfsdf',
      url : '#'
    },
  ]

  // 함수 --------------------------------

  useEffect(() => {
    changeTitleAnimation();
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectIndex]);

  const nextSlide = () => {
    changeTitleAnimation();
    if (selectIndex >= imgUrlList.length - 1) setSelectIndex(0);
    else setSelectIndex(selectIndex + 1);
  };

  const prevSlide = () => {
    changeTitleAnimation();
    if (selectIndex <= 0) setSelectIndex(imgUrlList.length - 1);
    else setSelectIndex(selectIndex - 1);
  };

  // style ---------------------------
  const butonStyle = {
    padding: "3rem",
    border: "1px solid white",
    borderRadius: "50%",
  };


  const changeTitleAnimation = () =>{
    if(oldSelectIndex !== selectIndex){
      setAnimationClass("main-banner-title-animation");
      setTimeout(() => setAnimationClass(""), 1000); // 애니메이션 지속 시간만큼 설정
      setOldSelectIndex(selectIndex);
    } 
  }

  return (
    <section className="relative overflow-hidden main-screen-h">
      <div className="absolute z-10 w-full h-full bg-[#0000003b]">
        <div className=" max-w-[192rem] m-auto flex flex-col justify-center w-full h-full box-border section-padding">
          <div className={`${animationClass}`}>
            <h1 className="text-white text-[3rem] font-extrabold mb-5">{titleList[selectIndex].title}</h1>
            <h3 className="text-white text-[2rem] font-semibold">{titleList[selectIndex].subTitle}</h3>
          </div>

          {/* 버튼 관련  */}
          <div className="flex items-end mt-64">
            <span className="buttons mr-12">
              <button
                onClick={prevSlide}
                style={butonStyle}
                className=" overflow-hidden hover:bg-[#ffffff64] mr-10"
              >
                <FaArrowLeftLong size={20} color="white" />
              </button>
              <button
                onClick={nextSlide}
                style={butonStyle}
                className=" overflow-hidden transition-all hover:bg-[#ffffff72]"
              >
                <FaArrowRightLong size={20} color="white" />
              </button>
            </span>
            <span className="text-white font-semibold text-[12px] mb-5">
              {selectIndex + 1}/{imgUrlList.length}{" "}
            </span>
          </div>
        </div>
      </div>

      <ul className={`w-[300%] h-full bg-black flex`}>
        {imgUrlList.map((element, index) => {
          return (
            <li
              className={`w-[calc(100%/3)] h-full app-transition bg-cover`}
              key={index}
              style={{transform: `translateX(-${selectIndex}00%)`, background : `url(${element}) no-repeat center center`, backgroundSize: 'cover'}}
            >
              {/* <img src={element} alt="" className="w-full h-full" /> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Main;
