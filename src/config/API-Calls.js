import AxiosClient from "./AxiosClient";


export async function retrieveRegistries() {
  return await AxiosClient.get('/registry')
}
export async function createRegistry(title, description, date) {
  return await AxiosClient.post('/registry', {
    title: title,
    description: description,
    date: date
  })
}
export async function deleteRegistry(id) {
  return await AxiosClient.delete('/registry/' + id)
}

export async function retrieveRegistry(id) {
  return await AxiosClient.get('/registry/' + id)
}

export async function editRegistry(id, title, description, date) {
  return await AxiosClient.put('/registry/' + id, {
    title: title,
    description: description,
    date: date
  })
}

export async function createProduct(regId, url) {
  return await AxiosClient.post('registry/' + regId + '/product', { url: url })
}

export async function deleteProduct(regId, prodId) {
  return await AxiosClient.delete('registry/' + regId + '/product/' + prodId)
}
