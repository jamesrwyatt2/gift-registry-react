import AxiosClient from "../AxiosClient";


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
    return await AxiosClient.delete('/registry/'+id)
}

export async function retrieveRegistry(id) {
    return await AxiosClient.get('/registry/'+id)
}

export async function createProduct(regId) {
    return await AxiosClient.post('registry/'+regId+'/product')
}
