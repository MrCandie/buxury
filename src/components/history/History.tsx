import Wrapper from "components/ui/Wrapper";
import HistoryCenter from "./HistoryCenter";
import { useEffect, useState } from "react";
import { getUserOrders } from "util/http";

export default function History() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserOrders();
        setList(response.orders);
      } catch (error: any) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <HistoryCenter list={list} />
    </Wrapper>
  );
}
