import { Routes, Route } from "react-router-dom";

import { Home } from "pages/home";
import { MyQR } from "pages/my-qr";
import { MyBottle } from "pages/my-bottle";
import { Collection } from "pages/collection";
import { BottleAdd } from "pages/bottle-add";

export const RouteSelector = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-qr" element={<MyQR />} />
      <Route path="/my-bottle" element={<MyBottle />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/bottle-add" element={<BottleAdd />} />
    </Routes>
  );
};
