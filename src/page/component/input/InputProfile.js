import React, {useState} from "react"
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton"
import {StyledInputWrap} from "style/formStyle";
import InputLabel from "skeleton/component/input/InputLabel";
import InputText from "skeleton/component/input/InputText";
import {StyledFullButtonWrap} from "style/roundButton";
import {v4 as uuidv4} from "uuid";

export default function InputProfile({nickName, emailAddress, action}){
    const [inputs, setInputs] = useState({
        nickName: "",
        emailAddress: ""
    })
    const [focusName, setFocusName] = useState(null)

    function submit(e){
        e.preventDefault()
        if (inputs.nickName === "") {
            alert("input nick name")
            return
        }
        action({
            nickName: inputs.nickName,
            emailAddress:inputs.emailAddress
        })
    }

    const onChange = e => {
        const { value, name } = e.target
        setFocusName(name)
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        })
    }

    const onReset = () => {
        setInputs({
            price: "",
            expireDate: ""
        })
    }

    const InputField = ({name, placeHolder, value, isFocus, maxLength= "20" }) =>
        isFocus ?
            <InputText placeHolder={placeHolder}
                       name={name}
                       height={48} fontSize={14}
                       onChange={onChange}
                       value={value}
                       autoFocus
                       maxLength ={maxLength}

            />
            :
            <InputText placeHolder={placeHolder}
                       name={name}
                       height={48} fontSize={14}
                       onChange={onChange}
                       value={value}
                       maxLength = {maxLength}

            />
    return (
        <div>
            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="mail" />
                <InputField
                    name={"emailAddress"}
                    placeHolder="ex) marketplace@gmail.com"
                    value={inputs.emailAddress}
                    isFocus={focusName === "emailAddress"}
                />
            </StyledInputWrap >

            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="Nickname" />
                <InputField
                    name={"nickName"}
                    placeHolder="ex) marketplace"
                    value={inputs.nickName}
                    isFocus={focusName === "nickName"}
                />

            </StyledInputWrap>

            <StyledFullButtonWrap>
                <BorderRadiusButton children="Sign Up" type="purple"
                         unactive={inputs.nickName === "" || inputs.emailAddress === ""}
                         fullSize={true}
                         onClick={e => submit(e)}
                />
            </StyledFullButtonWrap>

        </div>
    )
}