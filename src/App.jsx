import { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import { Header } from './layout/Header';
import { CssBaseline } from '@mui/material';
import { PageTitleProvider } from './context/PageTitle';
import { UserProvider } from './context/User';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { LoginDialog } from './features/user/components/login/LoginDialog';
import { ProductListPage } from './features/productList/component/ProductListPage';
import { ProductPage } from './features/product/component/ProductPage';

function App() {
  return (
    <PageTitleProvider>
      <UserProvider>
        <Fragment>
          <CssBaseline />
          <Router>
            <Header />
            <LoginDialog />
            <Routes>
              <Route path="/product-list" element={<ProductListPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<Navigate to="/product-list" />} />
            </Routes>
          </Router>
        </Fragment>
      </UserProvider>
    </PageTitleProvider>
  );
}

export default App;

// const BestForm = () => {
//   const [controlled, setControlled] = useState('default state');
//   const uncontrolled = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(uncontrolled.current?.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>controlled: {controlled}</label>
//       <input
//         value={controlled}
//         onChange={(e) => setControlled(e.target.value)}
//       />
//       <label>uncontrolled: {uncontrolled.current?.value}</label>
//       <input ref={uncontrolled} />
//       <input type="submit" />
//     </form>
//   );
// };
