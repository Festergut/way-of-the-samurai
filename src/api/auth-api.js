import { instance } from "./api";

export const authMe = () => {
    return instance.get('auth/me')
}


export const loginReq = (data) => {
    if (data) {
        debugger
        return instance.post('auth/login', data)
    }
}

export const logoutReq = () => {
    return instance.delete('auth/login')
}

export const captchaReq = () => {
    return instance.get('security/get-captcha-url')
}