import React, {useState} from "react"
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton"
export default function InputProfile({nickName, emailAddress, action}){
    const TAG = "InputProfile"
    const [inputNickName, setNickName] = useState(nickName)
    const [inputEmailAddress, setEmailAddress] = useState(emailAddress)
    function submit(e){
        e.preventDefault()
        if (inputNickName === "") {
            alert("input nick name")
            return
        }
        action({
            nickName: inputNickName,
            emailAddress:inputEmailAddress
        })
    }
    return (
        <div>
            <label>nick name:</label>
            <input type="text"
                   defaultValue={inputNickName}
                   onChange={e=>setNickName(e.target.value)}/>
            <label>email:</label>
            <input type="text"
                   defaultValue={inputEmailAddress}
                   onChange={e=>setEmailAddress(e.target.value)}/>

            <BorderRadiusButton children="submit" height={52} fontSize={16} radius={6}  onClick={e => submit(e)}/>

        </div>
    )
}