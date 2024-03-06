export interface ResultObject {
    _id: string,
    nickname: string,
    email: string,
    password: string,
    createdAt: string,
    createdBy: string,
    updatedAt: string,
    updatedBy: string,
    etlStatus: number,
    objectStatus: string
}

export interface ResultError {
    error: {
        errorCode: string,
        message: string,
        target: string
    }
}
