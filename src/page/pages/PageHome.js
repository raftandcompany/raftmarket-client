import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {observer} from "mobx-react"
import {v4 as uuidv4} from "uuid"
import * as Scroll from 'react-scroll'

import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter from "page/PagePresenter"
import PageTab from "page/component/tab/PageTab"
import InputSearch from "page/component/input/InputSearch"
import ViewPager from "page/component/viewpager/ViewPagerSample"
import ItemAsset, {AssetData} from "page/component/item/ItemAsset"
import {Title} from "style/textStyle"
import SearchBox from "skeleton/component/search/SearchBox";
import RoundButton from "skeleton/component/button/RoundButton";


export default function PageHome({pageObj}){
    const TAG = "PageHome"
    const [assets, setAssets] = useState([])
    let dataProvider = AppDataProvider()
    let disposer = null
    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
        console.log(TAG, "onAppear")
        observable(this,dataProvider)
        let address = AppMetamaskManager().accounts[0]
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAsset, "main"))

    }
    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.getAsset :
                        setAssets(response.data.map( set => {
                            var obj = new Object()
                            obj.name = set.name
                            obj.datas = set.assets.map(d => new AssetData(d))
                            return obj
                        }))
                        break
                }
            }

            let error = dataProvider.error
            if (error != null){
                switch (response.type) {
                    case  Rest.ApiType.getAsset :
                        break
                }
            }
        })
    }
    function onDisappear (){
        if (disposer != null) {
            disposer()
        }
    }

    const CollectionList = observer(({ datas }) =>
        <div key={uuidv4()}>
            { datas.map(set => <CollectionItemList set={ set }/>) }
        </div>
    )
    const CollectionItemList = ({ set }) =>
        <div key={uuidv4()} >
            <Title>{ set.name }</Title>
            { set.datas.map(data => <Scroll.Element key={uuidv4()}><ItemAsset data={data}/></Scroll.Element>) }
        </div>

    function onSearch (keyword){
        console.log(TAG, "onSearch " + keyword)
    }

    function onSearchBack (){
        console.log(TAG, "onSearchBack")
    }

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <SearchBox new={true} keyword={""} back={onSearchBack}  search={onSearch} />
            <StyledScrollWrap>
                <div>
                    <RoundButton as={"a"} href={"/"} icon="New" type="purple" />
                    <RoundButton icon="Art" type="blue" />
                    <RoundButton icon="Music" type="purple" />
                    <RoundButton icon="Sports" type="blue" />
                    <RoundButton icon="Virtual Reality" type="purple" />
                    <RoundButton icon="Trading Card" type="blue" />
                    <RoundButton icon="Collective Items" type="purple" />
                    <RoundButton icon="Domain Name" type="blue" />
                </div>
            </StyledScrollWrap>
            <ViewPager/>
            <CollectionList datas = {assets} />
        </PageBg>
    )


}

