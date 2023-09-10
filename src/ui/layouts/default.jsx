import { Header, Footer } from "../components"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}