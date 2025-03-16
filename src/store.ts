import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
    result: CryptoPrice;
    loading: boolean;
    cryptoCurrencies: CryptoCurrency[];
    fetchCryptos: () => Promise<void>;
    fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>((set) => ({
    result: {} as CryptoPrice,
    loading: false,
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos();
        set({
            cryptoCurrencies,
        });
    },
    fetchData: async (pair) => {
        set({loading: true})
        const result = await fetchCurrentCryptoPrice(pair);
        set({ result, loading: false });
    },
}));
