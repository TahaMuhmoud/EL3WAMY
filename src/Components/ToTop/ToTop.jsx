import { useEffect, useRef } from 'react';
import { TbCircleArrowUpFilled } from 'react-icons/tb'

function ToTop() {
  const totopEl = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > window.innerHeight) {
        totopEl.current.classList.remove("hidden");
      } else {
        totopEl.current.classList.add("hidden");
        
      }
    }
  });
  return (
    <div
      className="hidden fixed bottom-24 right-6 sm:right-10 rounded-full cursor-pointer"
      ref={totopEl}
    >
      <TbCircleArrowUpFilled
        fontSize={60}
        className=" text-mainColor-100"
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default ToTop