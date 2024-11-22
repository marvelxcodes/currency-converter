import Axios from "axios";
import { BASEURL } from "@/constants/EnvVariables";

type ConvertCurrencyProps = {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  amount: number;
};

export default async function convertCurrency({
  fromCurrencyCode,
  toCurrencyCode,
  amount,
}: ConvertCurrencyProps): Promise<number> {
  const axios = Axios.create({
    baseURL: BASEURL,
  });

  // JSON data of Conversion Rates
  const { data } = await axios.get(`/currencies/${fromCurrencyCode}.json`);
  
  return data[toCurrencyCode] * amount;
}

