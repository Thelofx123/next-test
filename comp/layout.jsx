import Appbar from "./Navbar"
import { Footer } from "./footer"
const Layout = ({ children }) => {
    return (
      <>
        <Appbar />
        <main>{children}</main>
        {/* <Footer/> */}
      </>
    )
  }

export default Layout