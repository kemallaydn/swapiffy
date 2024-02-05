import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import getData from "../../utils/getData";
import Card from "../../components/card";
import Circle from "../../components/circle";
function Home() {
  const [data, setData] = useState([]);
  async function asyncExample() {
    setData(await getData())
  }
  useEffect(() => {
    asyncExample();
  }, [])
  return (
    <Container isScroll={false}>
      <Circle data={data} />
      <Card data={data} />
    </Container>
  )
}
export default Home;