import { Component, OnInit } from '@angular/core';
import { HttpSpringService } from '../services/http-spring.service';
import { Project } from '../model/Project';
import { Student } from '../model/Student';
import { Details } from '../model/details';
import { DataTranferService } from '../services/data-tranfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  public groupId: number
  public projectId: string
  public projectName: string
  public reviewOne: boolean
  public reviewTwo: boolean
  public studentId1: string
  public studentName1: string
  public branch1: string
  public email1: string
  public phoneNumber1: number
  public studentId2: string
  public studentName2: string
  public branch2: string
  public email2: string
  public phoneNumber2: number
  public studentId3: string
  public studentName3: string
  public branch3: string
  public email3: string
  public phoneNumber3: number

  message: object;

  constructor(private httpService: HttpSpringService, private data: DataTranferService, private rt: Router) { }
  // this.data.currentMessage.subscribe(message => this.message = message)
  ngOnInit() { }
  submit() {
    let d: Details
    if (this.reviewTwo == undefined) {
      this.reviewTwo = false
    }
    if (this.reviewOne == undefined) {
      this.reviewOne = false
    }
    const project = new Project(this.groupId, this.projectId, this.projectName.toUpperCase(), this.reviewOne, this.reviewTwo)
    const student1 = new Student(this.studentId1, this.studentName1, this.branch1, this.email1, this.phoneNumber1)
    const student2 = new Student(this.studentId2, this.studentName2, this.branch2, this.email2, this.phoneNumber2)

    if (this.studentId3 == "" || this.studentId3 == undefined) {
      d = new Details(project, [student1, student2])
    } else {
      const student3 = new Student(this.studentId3, this.studentName3, this.branch3, this.email3, this.phoneNumber3)
      d = new Details(project, [student1, student2, student3])
    }
    console.log(JSON.stringify(d))
    this.httpService.postData(d).subscribe((dt: any) => {
      console.log(JSON.stringify(dt))
      this.rt.navigateByUrl("/home")
    })
  }
}