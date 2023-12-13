export class client {
    clientId: number;
    clientName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
    employeeStrength: number;
    gstNo: string;
    contactNo: string

    constructor() {
        this.clientId = 0,
            this.clientName = '',
            this.companyName = '',
            this.address = '',
            this.city = '',
            this.pincode = '',
            this.state = '',
            this.employeeStrength = 0,
            this.gstNo = '',
            this.contactNo = ''
    }
}

export class ReturnClass {
    message: string;
    result: boolean;
    data: any

    constructor(){
        this.message='',
        this.result=true,
        this.data=null
    }
}
