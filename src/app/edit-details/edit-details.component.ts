import { Component, OnInit } from '@angular/core';
import { DataTranferService } from '../services/data-tranfer.service';
import { Project } from '../model/Project';
import { Student } from '../model/Student';
import { Details } from '../model/details';
import { HttpSpringService } from '../services/http-spring.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
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

  constructor(private data: DataTranferService, private httpService: HttpSpringService, private rt: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe((x: any) => {
      this.groupId = x.groupId
      this.projectId = x.projectId
      this.projectName = x.projectName
      this.reviewOne = x.reviewOne
      this.reviewTwo = x.reviewTwo
      this.studentId1 = x.student[0].studentId
      this.studentName1 = x.student[0].studentName
      this.branch1 = x.student[0].branch
      this.email1 = x.student[0].email
      this.phoneNumber1 = x.student[0].phoneNumber
      this.studentId2 = x.student[1].studentId
      this.studentName2 = x.student[1].studentName
      this.branch2 = x.student[1].branch
      this.email2 = x.student[1].email
      this.phoneNumber2 = x.student[1].phoneNumber
      this.studentId3 = x.student[2].studentId
      this.studentName3 = x.student[2].studentName
      this.branch3 = x.student[2].branch
      this.email3 = x.student[2].email
      this.phoneNumber3 = x.student[2].phoneNumber
    })
  }
  save() {
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
    this.httpService.putData(this.groupId, d).subscribe((dt: any) => {
      this.rt.navigateByUrl("/home")
    })
  }
}
