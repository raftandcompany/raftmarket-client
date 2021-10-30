import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import ItemAsset, {AssetData} from "page/component/item/ItemAsset"
import {Title} from "style/textStyle"
import SearchBox from "skeleton/component/search/SearchBox";
import RoundButton from "skeleton/component/button/RoundButton";
import {Category} from "store/rest/api/Collection"


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
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAsset, "main", TAG))

    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response

            if (response != null){

                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.getSearch :
                        var obj = new Object()
                        obj.name = "Search Result"
                        obj.datas = response.data.map(d => new AssetData(d))
                        setAssets([obj])
                        break
                    case  Rest.ApiType.getAsset :
                        setAssets(response.data.filter(set =>
                            set.assets != null
                        ).map( set => {
                            var obj = new Object()
                            obj.name = set.name
                            obj.datas = set.assets.map(d => new AssetData(d))
                            return obj
                        }))
                        break
                    case  Rest.ApiType.getAssetSearch :
                        console.log(TAG, response)
                        var obj = new Object()
                        obj.name = currentCategory
                        obj.datas = response.data.map(d => new AssetData(d))
                        setAssets([obj])

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
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getSearch, {searchWord:keyword}, TAG))
    }
    function onSearchBack (){
        console.log(TAG, "onSearchBack")
    }

    function onSearchCategory (category){
        console.log(TAG, "onSearch Category " + category)
        setCurrentCategory(category)
        setAssets([])

        let data = {collectionCategory:category}
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetSearch, data , TAG))
    }

    const CategoryItem = ({name, category}) =>
        <RoundButton
            icon = { name }
            type = { (currentCategory === category) ? "purple" : "blue" }
            onClick={ e=> onSearchCategory(category) }/>

    const AssetItemList = ({ set }) =>
        <div>
            <Title>{ set.name }</Title>
            <div className="list list-collection">
                { set.datas.map( data =>
                    <ItemAsset
                        size="small"
                        key={ uuidv4().toString() }
                        data={data}
                        action = {()=> {
                            let pageObj = new PageObjcet(PageId.Asset, {data: data})
                            AppPagePresenter().openPopup(pageObj)
                        }}
                    />)
                }
            </div>
        </div>

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <SearchBox new={true} keyword={""} back={onSearchBack}  search={onSearchKeyword} />
            <StyledScrollWrap>
                <div>
                    <CategoryItem name={"New"} category={Category.New}/>
                    <CategoryItem name={"Art"} category={Category.Art}/>
                    <CategoryItem name={"Music"} category={Category.Music}/>
                    <CategoryItem name={"Sports"} category={Category.Sports}/>
                </div>
            </StyledScrollWrap>
            { assets.map(set => <AssetItemList  key={ uuidv4().toString() } set={ set }/>) }
        </PageBg>
    )


}
