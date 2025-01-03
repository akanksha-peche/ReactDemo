import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Axios from 'axios';


function App() {
  // let a="hii";
const [a,setA] = useState("");
  // const [count, setCount] = useState(0)
  Axios.get('https://dummyjson.com/quotes')
  .then (function (response) {
    console.log(response.data.quotes[1]);
    setA(response.data.quotes[1].quote);
    // a=response.data.quotes[1].quote;
    console.log("..............")
    console.log(a)
  })

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <h1> Fetching Api</h1>
    <h2>{a}</h2>


    </>
  )
}

export default App;
