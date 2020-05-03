import {createContext} from "react";

export const Context = createContext({
    pageSize: null,
    portionSize: null,
    userName: '',
    page: 1
});