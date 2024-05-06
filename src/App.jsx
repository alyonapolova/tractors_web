import { Fragment, useEffect } from 'react';
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
import { ProductListPage } from './productList/ProductListPage';
import { ProductPage } from './product/ProductPage';
import { LoginDialog } from './features/user/components/login/LoginDialog';
import { useDispatch } from 'react-redux';
import { openLoginDialog } from './features/user/actions/openLoginDialog';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoginDialog());
  }, []);
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
