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
  async get(action: string, params?: any) {
    try {
      const response = await this.api.get(action, { params });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(action: string, data?: object) {
    try {
      const response = await this.api.post(action, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message);
      } else {
        console.error("Beklenmedik bir hata oluştu:", error);
      }
    }
  }

  async put(action: string, id: string, data?: object) {
    try {
      const response = await this.api.put(`${action}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("API PUT Error:", error);
      throw new Error("API PUT isteği sırasında bir hata oluştu.");
    }
  }

  async delete(action: string, id: string) {
    try {
      const response = await this.api.delete(`${action}/${id}`);
      return response.data;
    } catch (error) {
      console.error("API DELETE Error:", error);
      throw new Error("API DELETE isteği sırasında bir hata oluştu.");
    }
  }
}

export default ApiService;
