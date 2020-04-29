import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpSpringService {

  private URL: string = "http://192.168.0.11:7071/"

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  public postData(s: object) {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.URL, s, { headers })
  }
  public getData() {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.URL, { headers })
  }
  public putData(g: number, s: object) {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(this.URL + g, s, { headers })
  }
  public deleteData(g: number) {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(this.URL + g, { headers })
  }

  reg(d: object) {
    return this.http.post(this.URL, d)
  }
}
