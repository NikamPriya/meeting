export interface IclientPackageList{
    clientPackageId: number;
    clientId: number;
    packageId: number;
    createdDate: Date;
    lastUpdated: Date;
    packageStartDate: Date;
    packageEndDate: Date;
    isActive: boolean;
    packageName: string;
    clientName: string
}
