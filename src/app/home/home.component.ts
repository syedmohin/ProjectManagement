import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpSpringService } from '../services/http-spring.service';
import { DataTranferService } from '../services/data-tranfer.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details: any
  public sId: string
  public sName: string
  public br: string
  public mail: string
  public pNumber: number
  public me: object
  public name: string
  constructor(private http: HttpSpringService, private data: DataTranferService, private rt: Router, private modalService: NgbModal) {
    this.getData()
  }
  getData() {
    this.http.getData().subscribe(data => {
      this.details = data
    }, () => {
      alert("unable to fetch data!")
    })
  }

  ngOnInit() { }

  edit(a: object) {
    this.data.changeMessage(a)
    this.rt.navigateByUrl("/edit")
  }
  del(x: number) {
    this.http.deleteData(x).subscribe(data => {
      this.getData()
    }, () => {
      alert("unable to delete data!")
    })
    this.getData()
  }

  open(content: any, s: any) {

    const m = this.modalService.open(content, { windowClass: 'dark-modal' });
    this.me = s
    this.sId = s.studentId
    this.sName = s.studentName
    this.br = s.branch
    this.mail = s.email
    this.pNumber = s.phoneNumber
  }

}
