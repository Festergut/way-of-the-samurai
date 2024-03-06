import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'bd29acc3-5fd2-411d-a026-a8d1788092b1'},
    withCredentials: true,
})

export const ajaxGetUsers = (currentPage, pagesCount) => {
    return instance.get(`users?page=${currentPage}&count=${pagesCount}`)
        .then(response => response.data)
}

export const followAPI = {
    ajaxFollow (id) {
        return instance.post(`follow/${id}`).then(
            response => response.data
        )
    },
    ajaxUnfollow (id) {
        return instance.delete(`follow/${id}`).then(
            response => response.data
        )
    }
}

