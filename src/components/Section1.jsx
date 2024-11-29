import { useEffect, useState } from "react";

const Section1 = () =>{
    const [scrollPostion, setScrollPostion] = useState(0);
    
    const imgUrlList = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-small-white-rabbit-in-the-grass-image_2915502.jpg",
    ];


    // 함수 ----------------------
    useEffect(()=>{
        window.addEventListener('scroll', listener);

        return ()=> window.removeEventListener('scroll',listener);

    },[scrollPostion])

    const listener = () =>{ setScrollPostion(window.pageYOffset)}
    

    // style ----------------------
    const titleStyle = {fontSize: '3rem', lineHeight: '4rem'};

    return (
        <section className="section-padding flex flex-col justify-center max-w-[1920px] m-auto" id="wrap">
            <div className="mt-20 flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-gray-300" style={titleStyle}>네이버클라우드가 더 큰 성장을 위한</h1>
                <h1 className="font-extrabold" style={titleStyle}>Hyperscale AI 클라우드 플랫폼으로 변화합니다</h1>

                <button className="mt-20 app-black-btn">소개 바로가기</button>
            </div>
            <div>
                <ul className="lg:mt-60 mt-20 h-[30rem] lg:w-[80rem] w-[8rem] flex justify-center items-center m-auto relative">
                    {
                        imgUrlList.map((element ,index)=>{
                            return <li className={['lg:w-[30rem] lg:h-[30rem] w-[15rem] h-[15rem] rounded-full absolute app-transition', 
                                index  === 0 && `bg-slate-400 z-0`,
                                index  === 1 && 'bg-slate-200 z-10',
                                index  === 2 && `bg-gray-50 z-20`

                            ].join(' ')} 
                            style={{
                                transform: index  === 0 ?  `translateX(-${scrollPostion > 800 ? 80 : scrollPostion /10}%)`: 
                                index  === 1 ? 'translateX(0)' :
                                `translateX(${scrollPostion > 800 ? 80 : scrollPostion /10}%)`
                            }}
                            key={index}></li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}
export default Section1;