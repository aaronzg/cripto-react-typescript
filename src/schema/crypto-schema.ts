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
