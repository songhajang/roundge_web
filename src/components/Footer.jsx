import IconBtn from "./btn/IconBtn";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () =>{

  // style ----------------------
  const titleStyle = {fontSize: "1.5rem" , color: 'white', fontWeight: '800' }

    return (
      <section className=" bg-slate-700">
        <div className="p-20 max-w-[1920px] m-auto">
          <ul className="md:flex-row flex justify-between flex-col">
            <li className="flex-1" style={titleStyle}>
                라운지
            </li>
            <li className="lg:flex-nowrap lg:mt-0 flex-1 flex flex-wrap mt-20">
              <div className="mr-60">
                <span className="flex items-center">
                  <IconBtn><FaMapMarkerAlt size={16} color="white" /></IconBtn>
                  <p className="ml-5" style={titleStyle}>asdfasdfsd</p>
                </span>
                <span className="mt-5 flex items-center">
                  <IconBtn><FaMapMarkerAlt size={16} color="white" /></IconBtn>
                  <p className="ml-5" style={titleStyle}>asdfasdfsd</p>
                </span>
                <span className="mt-5 flex items-center">
                  <IconBtn><FaMapMarkerAlt size={16} color="white" /></IconBtn>
                  <p className="ml-5" style={titleStyle}>asdfasdfsd</p>
                </span>
              </div>
              <div className="lg:mt-0 flex-1 mt-20">
                <h3 style={titleStyle}>소개글</h3>
                <p className="mt-5 text-gray-300 text-[1.4rem]">
                  asdfasdfasdfasdfasdfasdfasdfasdfasdfasds <br />
                  asdfasdfasdfasdfasdfasdfasdfasdfasdfasd <br />
                  asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Footer;