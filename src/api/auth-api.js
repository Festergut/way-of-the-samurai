import { instance } from "./api";

export const authMe = () => {
    return instance.get('auth/me')
}


export const loginReq = (data) => {
    if (data) {
        return instance.post('auth/login', data)
    }
}

export const logoutReq = () => {
    return instance.delete('auth/login')
}