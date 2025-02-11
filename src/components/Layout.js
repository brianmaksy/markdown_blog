import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <hr className="header-line" />

      <div className="layout-body">
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
