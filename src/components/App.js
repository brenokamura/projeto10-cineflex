import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/css/GlobalStyle"
import Header from "./Header"
import Movies from "./Movies"
import Sessions from "./Sessions"



export default function App() {

    return (
        <BrowserRouter>
            <ScreenContainer />
            <Header />
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={<Movies />}>
                </Route>
                <Route
                    path="/sessoes/:idFilme"
                    element={<Sessions />}>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}






const ScreenContainer = styled.div`
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;

`