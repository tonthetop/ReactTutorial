
import {SET_JOB,ADD_JOB,DELETE_JOB} from './constant'
//2. actions
export const setJob = (payload) => {
    return {
        type: SET_JOB, payload: payload
    }
}
export const addJob = (job) => {
    return { type: ADD_JOB, payload: job }
}

export const deleteJob = (index) => {
    return { type: DELETE_JOB, payload: index }
}