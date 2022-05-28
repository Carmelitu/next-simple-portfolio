import { useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import NProgress from "nprogress"
import nProgress from "nprogress"

const Layout = ({ children, title, footer = true, dark = false }) => {
 
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start()
    }

    router.events.on("routeChangeStart", handleRouteChange)

    router.events.on("routeChangeComplete", () => NProgress.done())

    router.events.on("routeChangeError", () => nProgress.done())

    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className="text-center text-light">
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="text-white text-center">
          <div className="container p-4">
            <p>&copy; Lucas Seijo</p>
            <p>{new Date().getFullYear()}</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      )}
    </div>
  )
}

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
}

export default Layout