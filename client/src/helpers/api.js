
import axios from 'axios'
import { getToken } from './auth'

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  const config = {
    method,
    url: `/api${requestUrl}`,
    headers: { 
      Authorization: `${getToken()}`,
      'Content-Type': 'application/json',
    },
    data,
  }
  return config
}

//---------- User / Profile section ----------//
//----- login & register -----//
const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const register = (data) => {
  return makeAxiosRequest('/api/auth/register/', data)
}

export const login = async (data) => {
  return makeAxiosRequest('/api/auth/login/', data)
}
//-----------------------------------------------//
//----- get user info / edit user info -----//
export const getUserInfo = async (id) => {
  const config = {
    method: 'get',
    url: `/api/auth/profile/${id}/`,
    headers: {},
  }
  const response = await axios(config)
  return response.data
}

export const editUserInfo = async (id) => {
  const config = {
    method: 'put',
    url: `/api/auth/profile/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}
//----- follow / unfollow && favourite / unfavourite -----//
export const followerFunc = async (id) => {
  const config = {
    method: 'put',
    url: `/api/auth/followToggle/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const favouriteFunc = async (id) => {
  const config = {
    method: 'put',
    url: `/api/auth/favouriteToggle/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//
//----- post, edit & delete art -----//
export const postArt = async () => {
  const config = {
    method: 'post',
    url: '/api/art/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const editArt = async (id) => {
  const config = {
    method: 'put',
    url: `/api/art/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const deleteArt = async (id) => {
  const config = {
    method: 'delete',
    url: `/api/art/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//
//----- fetch art -----//

export const fetchOneArtwork = async (id) => {
  const config = {
    method: 'get',
    url: `/api/art/${id}/`,
    headers: {},
  }
  const response = await axios(config)
  return response.data
}

export const fetchAllArt = async () => {
  const config = {
    method: 'get',
    url: '/api/art/',
    headers: {},
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//
//----- post, edit, delete, fetch comments -----//
export const postComment = async () => {
  const config = {
    method: 'post',
    url: '/api/comment/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const editComment = async (id) => {
  const config = {
    method: 'put',
    url: `/api/comment/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const deleteComment = async (id) => {
  const config = {
    method: 'delete',
    url: `/api/comment/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const fetchComments = async () => {
  const config = {
    method: 'get',
    url: '/api/comment/',
    headers: {},
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//