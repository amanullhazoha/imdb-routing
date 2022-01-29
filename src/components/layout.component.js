const Layout = ({ children }) => {
    return (
        <main id="mainSection">
            <div className="container">
                {children}
            </div>
        </main>
    );
}
 
export default Layout;