import { useState } from "react";
import Button from "../Components/Button";
const API = "https://dummyjson.com/products";
const Home = () => {
  const [loader, setLoader] = useState(false);

  const [products, setProducts] = useState([]);
  const fetchApi = async () => {
    setLoader(true);
    const resp = await fetch(API);
    const data = await resp.json();
    setProducts(data?.products);
    setLoader(false);
  };

  return (
    <>
      <header className="flex justify-end bg-orange-400 p-4 pr-1 text-white md:pr-1">
        <div className="flex items-center gap-2">
          <Button
            isLoading={loader}
            onClickEvent={fetchApi}
            className="flex bg-orange-800"
          ></Button>
        </div>
      </header>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 .text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 .bg-gray-700 .text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, i) => (
              <tr
                key={i}
                className="bg-white border-b .bg-gray-800 .border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
                >
                  {e.brand}
                </th>
                <td className="px-6 py-4">{e.title}</td>
                <td className="px-6 py-4">${e.price}</td>
                <td className="px-6 py-4">{e.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
