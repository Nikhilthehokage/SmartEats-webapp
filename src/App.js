import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Test from "./Test";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./comps/NavBar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FC from "./Canteens/FruitCanteen";
import FoodC from "./Canteens/FoodCanteen";
import NS from "./Canteens/NesCafe";
import PB from "./Canteens/PoonaBakery";
import HomePage from "./Canteens/HomePage";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <br />

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/FC" component={FC}></Route>
          <Route exact path="/FoodC" component={FoodC}></Route>
          <Route exact path="/NS" component={NS}></Route>
          <Route exact path="/PB" component={PB}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
