import { instance } from './api'

export const profileAPI = {
    getProfile: (userID) => {
        return instance.get(`profile/${userID}`).then((response) => {
            return response.data
        })
    },
    getProfileStatus: (userID) => {
        return instance.get(`profile/status/${userID}`).then((response) => {
            return response
        })
    },
    updateProfileStatus: (statustext) => {
        debugger
        return instance.put(`profile/status`, { "status": statustext }).then((response) => {
            debugger
            return response
        })
    }

}
