export class clientPackage {
    clientPackageId: number;
    clientId: number;
    packageId: number;
    createdDate: Date;
    lastUpdated: Date;
    packageStartDate: Date;
    packageEndDate: Date;
    isActive: boolean

    constructor() {
        this.clientPackageId = 0,
            this.clientId = 0,
            this.packageId = 0,
            this.createdDate = new Date(),
            this.lastUpdated = new Date(),
            this.packageStartDate = new Date(),
            this.packageEndDate = new Date(),
            this.isActive = true
    }
}

export class ReturnClass {
    message: string;
    result: boolean;
    data: any

    constructor() {
        this.message = '',
            this.result = true,
            this.data = null
    }
}
