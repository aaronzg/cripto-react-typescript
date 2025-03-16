import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
    const { result, loading } = useCryptoStore();

    const hasResult = useMemo(() => Object.values(result).length > 0, [result]);

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>

                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt=""
                            className="image"
                        />

                        <div>
                            <p>
                                El precio es de:{" "}
                                <span className="">{result.PRICE}</span>
                            </p>
                            <p>
                                Precio más alto del día:{" "}
                                <span className="">{result.HIGHDAY}</span>
                            </p>
                            <p>
                                Precio más bajo del día:{" "}
                                <span className="">{result.LOWDAY}</span>
                            </p>
                            <p>
                                Variación ultimas 24 horas:{" "}
                                <span className="">
                                    {result.CHANGEPCT24HOUR}
                                </span>
                            </p>
                            <p>
                                Última actualización:{" "}
                                <span className="">{result.LASTUPDATE}</span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
