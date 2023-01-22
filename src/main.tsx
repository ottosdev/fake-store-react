import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/useFakeStore";
import {QueryClient, QueryClientProvider} from 'react-query'
import "./global.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <CartProvider>
      <App />
    </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
