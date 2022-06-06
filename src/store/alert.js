import { atom } from "recoil";

export const alertStore = atom({
    key: 'alert',
    default: {
        isOpen: false,
        message: ''
    }
})