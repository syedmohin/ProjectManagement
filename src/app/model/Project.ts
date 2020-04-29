export class Project {
    public groupId: number
    public projectId: string
    public projectName: string
    public reviewOne: boolean
    public reviewTwo: boolean
    constructor(groupId: number, projectId: string, projectName: string, reviewOne: boolean, reviewTwo: boolean) {
        this.groupId = groupId
        this.projectId = projectId
        this.projectName = projectName
        this.reviewOne = reviewOne
        this.reviewTwo = reviewTwo
    }
}