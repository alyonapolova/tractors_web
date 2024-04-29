import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const PageTitleContext = createContext({
  title: 'Default page title',
  setTitle: () => {},
});

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (context === null) {
    throw new Error('Error');
  }
  return context;
};

export const PageTitleProvider = ({ children }) => {
  const [title, _setTitle] = useState('hi page');

  const setTitle = (newTitle) => {
    _setTitle(newTitle);
  };

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

PageTitleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
