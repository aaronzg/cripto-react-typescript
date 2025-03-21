import axios from "axios";
import { CryptoPriceSchema, CryptosResponseSchema } from "../schema/crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
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

export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`;

    const { data: { DISPLAY } } = await axios(url)
    const response = DISPLAY[pair.cryptoCurrency][pair.currency]
    
    const result = CryptoPriceSchema.safeParse(response)

    if(result.success) {
        return result.data
    }
}
