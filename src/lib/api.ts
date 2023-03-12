import { json } from "react-router-dom";
type Method = "get" | "post" | "put" | "del"

export class Api {
    private async makeRequest(url: string, method: Method, body:Record<string, any> = {}) {
        const options: RequestInit = {
            method,
            headers: {
                "Contet-Type": "application/json",
            },
        }
        if (method === 'post' || method === 'put'){
            options.body = JSON.stringify(body);
        }

        const result = await fetch(url,options);
        return result.json();
    }
    get(url: string){
        return this.makeRequest(url, 'get');
    }
    post(url: string){
        return this.makeRequest(url, 'post');
    }
    put(url:string){
        return this.makeRequest(url,'put');
    }
    del(url: string){
        return this.makeRequest(url,'del');
    }
}