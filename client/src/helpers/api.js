
import axios from 'axios'
import { getToken } from './auth'

//---------- User / Profile section ----------//
//----- login & register -----//
const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const register = (data) => {
  return makeAxiosRequest('auth/register', data)
}

export const login = async (data) => {
  return makeAxiosRequest('auth/login', data)
}
//-----------------------------------------------//
//----- get user info / edit user info -----//
export const getUserInfo = async () => {
  const config = {
    method: 'get',
    url: '/api/auth/profile',
    headers: {}
  }
  const response = await axios(config)
  return response.data
}

export const editUserInfo = async () => {
  const config = {
    method: 'put',
    url: '/api/auth/profile',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//
//----- post, edit & delete art -----//
export const postArt = async (id) => {
  const config = {
    method: 'post',
    url: `/api/art/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

export const editArt = async (id) => {
  const config = {
    method: 'put',
    url: `/api/art/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

export const deleteArt = async (id) => {
  const config = {
    method: 'delete',
    url: `/api/art/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}
//-----------------------------------------------//
//----- fetch art -----//

export const fetchOneArtwork = async (id) => {
  const config = {
    method: 'get',
    url: `/api/art/${id}`,
    headers: {}
  }
  const response = await axios(config)
  return response.data
}

export const fetchAllArt = async () => {
  const config = {
    method: 'get',
    url: '/api/art',
    headers: {}
  }
  const response = await axios(config)
  return response.data
}


//// what does this do? Is this used for posting art ////

// export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
//   const config = {
//     method,
//     url: `/api${requestUrl}`,
//     headers: { 
//       Authorization: `${getToken()}`,
//       'Content-Type': 'application/json'
//     },
//     data
//   }
//   return config
// }
//////////////////////