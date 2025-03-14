import axios from "axios";
import { create } from "zustand";
import { CryptosResponseSchema } from "./schema/crypto-schema";
import { CryptoCurrency } from "./types";

async function getCryptos() {
    const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    const {
        data: { Data },
    } = await axios(url);

    const result = CryptosResponseSchema.safeParse(Data);

    if (result.success) {
        return result.data;
    }
}

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos();
        set({
            cryptoCurrencies,
        });
    },
}));
