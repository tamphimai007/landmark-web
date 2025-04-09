// rafce

import { Link } from "react-router";
import { Button } from "../ui/button";

const EmptyList = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">ไม่พบผลลัพธ์</h1>
      <Button>
        <Link to="/">Clear Filter</Link>
      </Button>
    </div>
  );
};
export default EmptyList;
