export const Request = Object.freeze ({
    install : "install",
    autoConnect : "autoConnect",
    connect : "connect",
    getAccount : "getAccount"
})

export const Event = Object.freeze ({
    installed : "installed",
    connected : "connected"
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
    getAccount : "getAccount"
})

export class MetamaskError {
    constructor(type, err) {
        this.type = type
        this.err = err
    }
}