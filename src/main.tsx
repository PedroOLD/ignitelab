import { ApolloProvider } from '@apollo/client';
import { cliente } from './lib/apollo';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={cliente}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)