import axios, { AxiosInstance } from "axios";

class ApiService {
  private api: AxiosInstance;
  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async get(action:string, params?:any){
    try {
        const response = await this.api.get(action,{params})
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error('API GET isteği sırasında bir hata oluştu!')
        
    }
  }

  async post (action:string,data?:object){
    try {
        const response = await this.api.post(action,data)
        return response.data
    } catch (error) {
        console.log('API POST error',error);
        throw new Error('API POST isteği sırasında bir hata oluştu!')
    }
  }

  async put (action:string,id:string,data?:object){
    try {
        const response = await this.api.put(`${action}/${id}`,data)
        return response.data
    } catch (error) {
        console.error('API PUT Error:', error);
      throw new Error('API PUT isteği sırasında bir hata oluştu.');
    }
  }

  async delete (action:string,id:string){
    try {
        const response = await this.api.delete(`${action}/${id}`)
        return response.data
    } catch (error) {
        console.error('API DELETE Error:', error);
      throw new Error('API DELETE isteği sırasında bir hata oluştu.');
    }
  }
}

export default ApiService