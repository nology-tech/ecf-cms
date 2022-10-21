import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PathwaysListContainer from "../../containers/PathwaysListContainer/PathwaysListContainer"

const Home = () => {

  let collection = [];
for (let i = 0; i < 6; i++) {
  collection.push({
    id: `kjsvswkvfsihvds + ${i}`,
    header: `Financial Forest + ${i}`,
    category: "Finance",
    skillsTree: {
      name: "An introduction",
      icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fplay.svg?alt=media&token=153dc79c-6017-46e7-a185-c05dfe45b810",
      children: [
        {
          name: "Commercial Banking",
          icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fbarclays.svg?alt=media&token=eccb46a6-a98b-4a54-a04c-629d9745f1b7",
          provider: "Barclays",
          children: [
            {
              name: "Investing",
              provider: "Goldman Sachs",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fgoldman-sachs.svg?alt=media&token=2d816518-5b94-45d5-8d53-0c2e8b399960",
            },
            {
              name: "Welcome to HSBC",
              provider: "HSBC",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
              children: [
                {
                  name: "Accounting Santander",
                  provider: "Santander",
                  icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fsantander.svg?alt=media&token=4be9b1c3-9230-4559-89eb-4fc13b219f08",
                },
              ],
            },
            {
              name: "Accounting",
              provider: "Halifax",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
            },
          ],
        },
      ],
    },
  });
}
  const [dataSource, setDataSource] = useState(null);

  return (
    <Layout>
      <PathwaysListContainer dataSource={dataSource} setDataSource={setDataSource} dataJSON={collection}/>
    </Layout>
  );
};

export default Home;
