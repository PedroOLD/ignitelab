import { ApolloProvider } from '@apollo/client';
import { cliente } from './lib/apollo';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Event } from './pages/Event';

export function Router(){
    return (
        <ApolloProvider client={cliente}>
            <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<Event />}/>
                    <Route path="/lesson/:slug" element={<Event />}/>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}