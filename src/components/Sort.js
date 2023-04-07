import { Button } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function Sort({ sortHandler }) {
  const [sort, setSort] = useState(false);

  //   function sortHandler() {
  //     // setSort(!sort);
  //     sortHandler(sort);
  //   }
  //   console.log("sort = " + sort);

  useEffect(() => {
    sortHandler(sort);
  }, [sort]);
  //   console.log("sort = " + sort);

  return (
    <Button onClick={() => setSort(!sort)}>
      <SortAscendingOutlined /> Sort
    </Button>
  );
}

export default Sort;
