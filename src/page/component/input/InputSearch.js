import React, {useState} from "react"
import SearchBox from "skeleton/component/search/SearchBox"
export default function InputSearch({searchKeyword, search, back}){
    const TAG = "InputSearch"
    return (
        <SearchBox new={true} back={back} keyword={searchKeyword} search={search} />
    )
}