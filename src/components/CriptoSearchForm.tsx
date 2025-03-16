import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
    const initialState = {
        currency: "",
        cryptoCurrency: "",
    };

    const [pair, setPair] = useState<Pair>(initialState);
    const [error, setError] = useState("");
    
    const { cryptoCurrencies, fetchData } = useCryptoStore();

    //useEffect(() => {console.log(result)},[result]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(pair).includes("")) {
            setError("Todos los campos son obligatorios");
            return;
        }

        fetchData(pair);

        setError("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({ ...pair, [e.target.name]: e.target.value });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>

                <select
                    onChange={handleChange}
                    value={pair.currency}
                    name="currency"
                    id="currency"
                >
                    <option value="">--- Seleccione ---</option>
                    {currencies.map((currency) => (
                        <option value={currency.code} key={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>

                <select
                    onChange={handleChange}
                    value={pair.cryptoCurrency}
                    name="cryptoCurrency"
                    id="cryptoCurrency"
                >
                    <option value="">--- Seleccione ---</option>
                    {cryptoCurrencies.map((crypto) => (
                        <option
                            value={crypto.CoinInfo.Name}
                            key={crypto.CoinInfo.FullName}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    );
}
