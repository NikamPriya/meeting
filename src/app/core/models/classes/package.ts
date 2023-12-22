export class packages {
    packageId: number;
    packageName: string;
    packageCost: number;
    packageDescription: string;
    isPackageActive: boolean

    constructor() {
        this.packageId = 0,
        this.packageName = '',
        this.packageCost = 0,
        this.packageDescription = '',
        this.isPackageActive = true
    }
}

export class ReturnClass {

    message: string;
    result: boolean;
    data: any

    constructor() {
        this.message = '',
            this.result = false,
            this.data = null
    }
}
