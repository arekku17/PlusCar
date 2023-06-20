import axios from "axios"

export async function loginAuthUsuario(data) {
    console.log(data);
  return await axios.post(`https://pluscar-api.fly.dev/api/auth/login/usuario`, data, {
    'Access-Control-Allow-Credentials': true
  })
}

export async function loginAuthConductor(data) {
  console.log(data);
  return await axios.post(`https://pluscar-api.fly.dev/api/auth/login/conductor`, data, {
    'Access-Control-Allow-Credentials': true
  })
}

export async function loginAuthAdmin(data) {
  console.log(data);
  return await axios.post(`https://pluscar-api.fly.dev/api/auth/login/admin`, data, {
    'Access-Control-Allow-Credentials': true
  })
}