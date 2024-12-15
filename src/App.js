import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

import Menu from './components/menu';
import Dashboard from './components/dashboard';
import About from './components/about';
import Product from './components/product';
import ContactUs from './components/contactUs';
import NotFound from './notFound';

import Test1 from './test/test1.js';
import Test2 from './test/test2.js';
import Test3 from './test/test3.js';

import customData from './customData.json';

const App = () => {
  const windowLocation = window.location;

  useEffect(() => {
    return () => {
      if (windowLocation?.hash !== '') {
        window.location.href = '/';
      }
    };
  }, [windowLocation]);

  const renderMenu = () => {
    return (
      <Menu data={customData && customData?.menuRoutes.filter(name => name?.menuVisible)} />
    )
  };  

  const renderSwitchComponent = (routeURL) => {
    switch(routeURL) {
      case '/':
        return renderMenu();
      case '/dashboard':
        return (<>{renderMenu()}<Dashboard /></>);
      case '/about':
        return (<>{renderMenu()}<About /></>);
      case '/product':
        return (<>{renderMenu()}<Product /></>);
      case '/contactUs':
        return (<>{renderMenu()}<ContactUs /></>);
      default:
        return <NotFound />;
    }
  };

  return (<>
    <Routes>
      {customData && customData?.menuRoutes.map((item, index) => (
        <Route key={index} exact path={item.menuUrl} element={renderSwitchComponent(item.menuUrl)} />
      ))}
    </Routes>
    <Test1>Test Excel</Test1>
    <Test2>Test Excel</Test2>
    <Test3>Test Excel</Test3>
  </>);
}

export default App;