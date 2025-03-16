import { z } from "zod";

const { string, object, array } = z;

export const CurrencySchema = object({
    code: string(),
    name: string(),
});

export const CryptoResponseSchema = object({
    CoinInfo: object({
        Name: string(),
        FullName: string(),
    }),
});

export const CryptosResponseSchema = array(CryptoResponseSchema);

export const PairSchema = object({
    currency: string(),
    cryptoCurrency: string()
})

export const CryptoPriceSchema = object({
    PRICE: string(),
    IMAGEURL: string(),
    HIGHDAY: string(),
    LOWDAY: string(),
    CHANGEPCT24HOUR: string(),
    LASTUPDATE: string()
})
