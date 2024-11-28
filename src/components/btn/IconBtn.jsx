const IconBtn = (props) => {
  // { onClickEvent, children }
  return (
    <button
      className="rounded-full bg-[#0d0d0d55] flex justify-center items-center"
      style={{ padding: "1rem" }}
    >
      {props.children}
    </button>
  );
};
export default IconBtn;
