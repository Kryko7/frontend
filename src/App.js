import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import SignIn from './models/SignIn';
import SignUp from './models/SignUp';
import UIjs from './components/UIjs';
import CartPage from './components/cart';
import Cart from './models/dummyCart';
import Cart2 from './models/dummyCart2';
import CartX from './cartHandling/cartPage';
import { Provider } from 'react-redux/es/exports';
import store from './cartHandling/store';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Provider store={store}> <div> <UIjs /> </div> </Provider>  }/>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/cart" element={<Provider store={store}> <div> <CartX /> </div> </Provider> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;