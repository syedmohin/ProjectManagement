export class Student {
    public studentId: string
    public studentName: string
    public branch: string
    public email: string
    public phoneNumber: Number
    constructor(studentId: string, studentName: string, branch: string, email: string, phoneNumber: Number) {
        this.studentId = studentId
        this.studentName = studentName
        this.branch = branch
        this.email = email
        this.phoneNumber = phoneNumber
    }
}