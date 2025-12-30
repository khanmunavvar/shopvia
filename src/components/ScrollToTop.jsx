import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current URL location (path)
  const { pathname } = useLocation();

  //   when user goes to a new page, scroll window to up (0,0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; //  doesn't render anything 
};

export default ScrollToTop;