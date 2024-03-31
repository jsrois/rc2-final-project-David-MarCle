
/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Films}  from '../../presentation/pages/films/Films';
import { HomePage } from "../../presentation/pages/home/HomePage";

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/films/" element={<Films />}/>
        </Routes>
          </BrowserRouter>
          )
    }
         