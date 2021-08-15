import React, {useState} from "react"
export default function InputSearch({searchKeyword, action}){
    const TAG = "InputSearch"
    const [inputSearchKeyword, setSearchkKeyword] = useState(searchKeyword)
    function submit(e){
        e.preventDefault()
        let form = document.forms[TAG]
        console.log(TAG, form)
    }
    return (
        <div>
            <form method="POST" onClick={e => submit(e)} name={TAG} >
                <input type="text"
                       defaultValue={inputSearchKeyword}
                       onChange={e=>setSearchkKeyword(e.target.value)}/>
            </form>
        </div>
    )
}