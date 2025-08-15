import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export const SHIPPINGCOST: number = 2500
export const APIURL: string = 'https://nucbaz-api.vercel.app'
export const useSelectorTS: TypedUseSelectorHook<RootState> = useSelector;