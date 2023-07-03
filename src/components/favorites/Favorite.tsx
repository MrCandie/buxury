import Wrapper from "components/ui/Wrapper";
import FavoriteCenter from "./FavoriteCenter";
import { useEffect, useState } from "react";
import { getFavorites } from "util/http";

export default function Favorite({ data }: any) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getFavorites();
        setLoading(false);
        setList(response?.data?.favorites);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <FavoriteCenter list={list} loading={loading} />
    </Wrapper>
  );
}
