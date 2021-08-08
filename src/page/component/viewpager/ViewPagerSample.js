import React from "react"
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import ItemSample from "page/component/item/ItemSample";

const TAG = "ViewPagerSample"
export default function ViewPagerSample({pageObj}){
    let track = null
    return (
        <ViewPager>
            <Frame className="frame">
                <Track
                    ref={c => track = c}
                    viewsToShow={2}
                    infinite
                    className="track"
                >
                    <View className="view">
                        <ItemSample pageObj={{
                            color:"yellow",
                            title:"title1",
                            text:"text1"
                        }}/>
                    </View>
                    <View className="view">
                        <ItemSample pageObj={{
                            color:"black",
                            title:"title2",
                            text:"text2"
                        }}/>
                    </View>
                    <View className="view">
                        <ItemSample pageObj={{
                            color:"black",
                            title:"title3",
                            text:"text3"
                        }}/>
                    </View>
                    <View className="view">
                        <ItemSample pageObj={{
                            color:"black",
                            title:"title4",
                            text:"text4"
                        }}/>
                    </View>

                </Track>
            </Frame>
            <nav className="pager-controls">
                <a
                    className="pager-control pager-control--prev"
                    onClick={() => track.prev()}
                >
                    Prev
                </a>
                <a
                    className="pager-control pager-control--next"
                    onClick={() => track.next()}
                >
                    Next
                </a>
            </nav>
        </ViewPager>
    )
}


