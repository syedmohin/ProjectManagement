import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTranferService {

  private messageSource = new BehaviorSubject<object>({});
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: object) {
    this.messageSource.next(message)
  }
}
