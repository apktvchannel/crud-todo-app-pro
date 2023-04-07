import { Input, Space } from "antd";
import Search from "antd/es/transfer/search";
import { useEffect, useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // console.log(query);
  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <Space
      direction="vertical"
      style={{
        width: "300px",
      }}
    >
      <Search
        placeholder="input search text"
        onChange={(event) => setQuery(event.target.value)}
      />
    </Space>
  );
}

export default SearchBar;
