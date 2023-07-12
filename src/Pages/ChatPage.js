import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatPage() {
    const [data,setData] = useState('')
  const fetchData = async () => {
    const {data} = await axios.get("/api/chat");
    setData(data)
  };

  useEffect(() => {
    fetchData();
  });
  return <div>{data}</div>;
}

export default ChatPage;
