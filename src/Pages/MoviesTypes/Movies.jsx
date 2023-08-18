import { Outlet } from "react-router-dom";

export default function Movies() {
  return (
    <div className="text-9xl text-mainColor-100">
      <Outlet />
    </div>
  );
}
