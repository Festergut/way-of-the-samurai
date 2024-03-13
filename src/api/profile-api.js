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
        return instance.put(`profile/status`, { "status": statustext }).then((response) => {
            return response
        })
    },
    updateProfilePhoto: (photo) => {
        const form = new FormData();
        form.append('image', photo)
        return instance.put(`profile/photo`, form, { headers: { "Content-Type": "multipart/form-data" } })
    },
    updateProfileData: (changedProfileData) => {
        return instance.put(`profile`, changedProfileData).then((response)=>{
            return response
        })
    }
}
