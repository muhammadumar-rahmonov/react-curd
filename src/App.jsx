import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { CreateUser, UserCard } from "./Pages";
import Header from "./Components/Header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function GetData() {
    try {
      const data = await axios.get(
        "https://task-dev-kom.vercel.app/api/all-user"
      );

      if (data.status === 200) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<UserCard loading={loading} data={data} />}
          />
          <Route path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
