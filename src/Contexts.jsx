import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./Database";
const Context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [anser, setAnser] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/questions");
    setData(data.questions);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  //showAnser function
  const showAnser = (ids) => {
    const filterData = data.filter((cur) => {
      return cur.id == ids;
    });

    setAnser(filterData);
  };

  return (
    <Context.Provider value={{ data, showAnser, anser }}>
      {children}
    </Context.Provider>
  );
};
// global hook
const useGlobalHook = () => {
  return useContext(Context);
};
export default Contexts;
export { useGlobalHook };
