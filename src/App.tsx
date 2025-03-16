import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
// remote line
function App() {
    const { fetchCryptos } = useCryptoStore();

    useEffect(() => {
        fetchCryptos();
    }, [fetchCryptos]);

    return (
        <>
            <div className="container">
                <h1 className="app-title">
                    Cotizador de <span>Criptomonedas</span>
                </h1>
            </div>

            <div className="content">
                <CriptoSearchForm />
                <CryptoPriceDisplay />
            </div>
        </>
    );
}

export default App;
