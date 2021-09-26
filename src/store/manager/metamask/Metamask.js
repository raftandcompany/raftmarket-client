export const Request = Object.freeze ({
    install : "install",
    autoConnect : "autoConnect",
    connect : "connect",
    getAccount : "getAccount",
    checkAccountStatus : "checkAccountStatus"
})

export const Event = Object.freeze ({
    installed : "installed",
    connected : "connected",
    avaibleAccountStatus : "checkAccountStatus"
})

export const Status = Object.freeze ({
    uninstall : "uninstall",
    install : "install",
    connect : 'connect',
    connecting : 'connecting',
    disconnect : 'disconnect'
})

export const Error = Object.freeze ({
    autoConnect : "autoConnect",
    connect : "connect",
    getAccount : "getAccount",
    checkAccountStatus : "checkAccountStatus"
})

export const ExchangeKey = Object.freeze ({
    defaultAddress : "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
    unregistAdress : "0x0000000000000000000000000000000000000000",
    defaultTokenAddress : "0xdf032bc4b9dc2782bb09352007d4c57b75160b15"

})

export class MetamaskError {
    constructor(type, err) {
        this.type = type
        this.err = err
    }
}

