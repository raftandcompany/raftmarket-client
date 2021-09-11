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
import ViewPager from "page/component/viewpager/ViewPagerSample"
import ItemAsset, {AssetData} from "page/component/item/ItemAsset"
import {Title} from "style/textStyle"
import SearchBox from "skeleton/component/search/SearchBox";
import RoundButton from "skeleton/component/button/RoundButton";
import CardTypeRow from "../../../skeleton/component/card/CardTypeRow";


export default function PageHome({pageObj}){
    const TAG = "PageHome"
    const [assets, setAssets] = useState([])
    const [currentCategory, setCurrentCategory] = useState("")
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
                    case  Rest.ApiType.postAsset :
                        setAssets ([{
                                name: currentCategory,
                                datas: response.data.map(d => new AssetData(d))
                            }]
                        )
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

    function onSearchKeyword (keyword){
        console.log(TAG, "onSearch Keyword " + keyword)
    }
    function onSearchBack (){
        console.log(TAG, "onSearchBack")
    }

    function onSearchCategory (category){
        console.log(TAG, "onSearch Category " + category)
        setCurrentCategory(category)
        setAssets([])

        let data = {nftCategory:category}
        dataProvider.requestQ(new DataRequest(Rest.ApiType.postAsset, data ))
    }

    const CategoryItem = ({name, category}) =>
        <RoundButton
            icon = { name }
            type = { (currentCategory === category) ? "purple" : "blue" }
            onClick={ e=> onSearchCategory(category) }/>

    const CollectionItemList = ({ set }) =>
        <div>
            <Title>{ set.name }</Title>
            <div className="list list-collection">
                { set.datas.map( data => <ItemAsset data={data}/>) }
            </div>
        </div>


    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <SearchBox new={true} keyword={""} back={onSearchBack}  search={onSearchKeyword} />
            <StyledScrollWrap>
                <div>
                    <CategoryItem name={"New"} category={"NEW"}/>
                    <CategoryItem name={"Art"} category={"ART"}/>
                    <CategoryItem name={"Music"} category={"MUSIC"}/>
                    <CategoryItem name={"Sports"} category={"SPORTS"}/>
                    <CategoryItem name={"Virtual Reality"} category={"VIRTUAL_REALRITY"}/>
                    <CategoryItem name={"Trading Card"} category={"TRADING_CARD"}/>
                    <CategoryItem name={"Collective Items"} category={"COLLECTIVE_ITEMS"}/>
                    <CategoryItem name={"Domain Name"} category={"DOMAIN_NAME"}/>
                </div>
            </StyledScrollWrap>
            { assets.map(set => <CollectionItemList  key={ uuidv4().toString() } set={ set }/>) }




        </PageBg>
    )


}

