import React, {useState} from "react"
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton"
import {StyledInputWrap} from "style/formStyle";
import InputLabel from "skeleton/component/input/InputLabel";
import InputText from "skeleton/component/input/InputText";
import Button2 from "../../../skeleton/component/button/BorderRadiusButton";
import {StyledFullButtonWrap} from "../../../style/roundButton";

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
            <StyledInputWrap>
                <InputLabel children="mail" />
                <InputText placeHolder="ex) marketplace@gmail.com"
                           defaultValue={ inputEmailAddress }
                           height={48} fontSize={14}
                           onChange={e=>setNickName(e.target.value)}
                />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="Nickname" />
                <InputText placeHolder="ex) marketplace"  defaultValue={ inputNickName }
                           height={48} fontSize={14}
                           onChange={e=>setEmailAddress(e.target.value)}
                />
            </StyledInputWrap>

            <StyledFullButtonWrap>
                <Button2 children="Sign Up" type="purple"
                         unactive={inputNickName === "" || inputEmailAddress === ""}
                         fullSize={true}
                         onClick={e => submit(e)}
                />
            </StyledFullButtonWrap>

        </div>
    )
}