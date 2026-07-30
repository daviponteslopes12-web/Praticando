import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CarrinhoProvider } from './context/CarrinhoContext.jsx';
import './index.css';
import App from './App.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <CarrinhoProvider>
        <App />
      </CarrinhoProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
  