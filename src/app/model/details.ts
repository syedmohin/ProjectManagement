import { Project } from './Project';

export class Details {
    public project: Project
    public student = []
    constructor(project: Project, student) {
        this.project = project
        this.student = student
    }
}