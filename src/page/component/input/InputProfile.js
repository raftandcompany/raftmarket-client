import React, {useState} from "react"
export default function InputProfile({nickName, emailAddress, action}){
    const TAG = "InputProfile"
    const [inputNickName, setNickName] = useState(nickName)
    const [inputEmailAddress, setEmailAddress] = useState(emailAddress)
    function submit(e){
        e.preventDefault()
        let form = document.forms[TAG]
        console.log(TAG, form)
        action({
            nickName: inputNickName,
            emailAddress:inputEmailAddress
        })
    }
    return (
        <div>
            <form method="POST" onClick={e => submit(e)} name={TAG} >
                <label>nick name:</label>
                <input type="text"
                       defaultValue={inputNickName}
                       onChange={e=>setNickName(e.target.value)}/>
                <label>email:</label>
                <input type="text"
                       defaultValue={inputEmailAddress}
                       onChange={e=>setEmailAddress(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}