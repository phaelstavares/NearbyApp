import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.0.0.184:3333", // Quando eu reiniciar a máquina preciso verificar se o IP mudou.
    timeout: 700,
})