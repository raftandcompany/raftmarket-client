import styled, { keyframes } from 'styled-components'
import * as Ani from 'style/ani'
import * as Var from 'style/common/variable'
import { rem, radiusBox, ellipsis, typoBody1, typoBody2 } from 'style/common/mixin';

export const Body = styled.div`

// test 나중에 삭제
.dZRKXH {
    position: absolute;
    -webkit-animation: 0.5s gQeFpP;
    animation: 0.5s gQeFpP;
    padding: 1rem 1rem 5rem;
    background: #191A1F;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .popup-inner {
        min-height:400px;
    }
}
.jWpRVF{margin:0 auto;max-width:1920px;width:100%;height:100%;}.jWpRVF .dZRKXH{position:absolute;-webkit-animation:0.5s gQeFpP;-webkit-animation:0.5s gQeFpP;animation:0.5s gQeFpP;padding:1rem 1rem 5rem;background:#191A1F;left:0;top:0;width:100%;height:100%;}.jWpRVF .dZRKXH .popup-inner{height:350px;}.jWpRVF .img-login{margin:0 auto;padding:6.25rem 0 5rem;width:8.1875rem;}.jWpRVF .typo-emphasis{display:block;color:#fff;}.jWpRVF .typo-emphasis svg{vertical-align:-0.0625rem;}.jWpRVF .typo-body1{line-height:0.875rem;font-size:0.75rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:0.375rem;}.jWpRVF .typo-body1 + .typo-body1{margin-top:0.25rem;}.jWpRVF .typo-body1.pre{color:#BDCBDD !important;}.jWpRVF .typo-body1.basket{color:#FC9144 !important;}.jWpRVF .typo-body1.time{color:#EF5DA8 !important;}.jWpRVF .typo-body1 svg{margin-right:0.3125rem;vertical-align:-0.0625rem;}.jWpRVF .typo-body2{line-height:0.875rem;font-size:0.8125rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:0.375rem;color:#BDCBDD;}.jWpRVF .typo-body2.status{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.75rem;font-size:1rem;}.jWpRVF .typo-body2.status span{margin-right:0.5rem;}.jWpRVF .typo-body2.status span svg{vertical-align:-0.1875rem;}.jWpRVF .typo-body2.cart{color:#A5A6F6;}.jWpRVF .typo-body2.list{color:#76ADFF;}.jWpRVF .typo-body2.offer{color:#FC9144;}.jWpRVF .typo-body2.transfer{color:#EF5DA8;}.jWpRVF .owner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;clear:both;margin-top:1.375rem;}.jWpRVF .owner > *{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jWpRVF .owner svg{margin:0 1rem;}.jWpRVF .owner .type-owner{margin-left:0.5rem;color:#76ADFF;text-transform:capitalize;font-size:0.8125rem;}.jWpRVF .detailbox{padding-top:3.5rem;}.jWpRVF .detailbox .owner{margin-top:0.625rem;margin-bottom:1rem;}.jWpRVF .detailbox .owner .user-img{width:1.5rem;height:1.5rem;}.jWpRVF .detailbox .owner .text{line-height:1.25rem;font-size:0.875rem;border-bottom:1px solid #BDCBDD;}.jWpRVF .card-image{overflow:hidden;position:relative;padding-top:100%;border-radius:0.5rem;}.jWpRVF .card-image img{position:absolute;left:0;top:0;object-fit:cover;}.jWpRVF .text-sub{color:#76ADFF;}.jWpRVF .tab{width:100%;height:3.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.jWpRVF .title-history button{padding-left:1.375rem;}.jWpRVF .title-history button > span{width:100%;text-align:left;}.jWpRVF .title-history button .text-sub{font-size:0.875rem;}.jWpRVF .title-history button svg{float:right;margin-top:1.1875rem;}.jWpRVF .price svg{margin-right:0.75rem;}.jWpRVF .price .text-sub{margin-left:0.75rem;font-size:0.875rem;}.jWpRVF .current-price{position:relative;margin-left:-1rem;padding:1rem;width:calc(100% + 2rem);height:6.5rem;border-top:1px solid #48506C;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;background-color:#2F313E;}.jWpRVF .current-price .typo-body1{margin-bottom:0.9375rem;color:#BDCBDD;}.jWpRVF .current-price button{position:absolute;top:1rem;right:1.25rem;}.jWpRVF .accordion-item{padding-top:0.25rem;}.jWpRVF .accordion-item:not(:first-child){border-top:1px solid #2F313E;}.jWpRVF .accordion-button{padding-left:1rem;padding-right:1rem;height:3.25rem;line-height:3.25rem;border-radius:0.75rem;font-size:1rem;display:block;width:100%;text-align:left;}.jWpRVF .accordion-button strong{float:left;font-size:1.125rem;text-transform:capitalize;}.jWpRVF .accordion-button strong span{margin-left:0.75rem;font-size:1rem;}.jWpRVF .accordion-button svg{float:right;margin-top:1.25rem;}.jWpRVF .accordion-button.show svg{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.jWpRVF .accordion-button.offers + button{margin-top:0.25rem;margin-bottom:1.5rem;}.jWpRVF .accordion-cont{display:none;overflow:hidden;}.jWpRVF .accordion-cont > div{padding-left:1rem;padding-right:1rem;height:3.25rem;line-height:3.25rem;border-radius:0.75rem;font-size:1rem;margin-bottom:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;border-radius:1rem;height:auto;font-size:0.8125rem;background:#2F313E;}.jWpRVF .accordion-cont > div.market{position:relative;}.jWpRVF .accordion-cont > div.market .owner{margin-top:0;}.jWpRVF .accordion-cont > div.market button{position:absolute;text-transform:uppercase;width:5.625rem;right:1rem;bottom:1.25rem;}.jWpRVF .accordion-cont > div.about{float:left;border:1px solid #A5A6F6;width:calc(50% - 0.375rem);}.jWpRVF .accordion-cont > div.about:nth-child(even){margin-left:0.75rem;}.jWpRVF .accordion-cont > div.about .label{color:#A5A6F6;}.jWpRVF .accordion-cont > div.about .item{padding:0.375rem 0 1.25rem;font-size:0.875rem;color:#fff;}.jWpRVF .accordion-cont > div.about .rarity{font-size:0.875rem;}.jWpRVF .accordion-cont > div.about .typo-span{display:block;line-height:1.45;}.jWpRVF .accordion-cont .price{padding-left:1rem;padding-right:1rem;height:3.25rem;line-height:3.25rem;border-radius:0.75rem;font-size:1rem;background:#191A1F;}.jWpRVF .accordion-cont .typo-span{color:#90A0B7;}.jWpRVF .accordion-cont.show{display:block;}.jWpRVF .popup{padding:0;background:rgba(25,26,31,0.6);}.jWpRVF .popup-inner{z-index:11;position:fixed;left:0;bottom:0;width:100%;max-height:100%;overflow-y:auto;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;background-color:#2F313E;}.jWpRVF .popup-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:4.375rem;border-bottom:1px solid #48506C;}.jWpRVF .popup-header h1{padding-bottom:0;padding-left:1rem;line-height:4.375rem;}.jWpRVF .popup-content{padding:1rem;}.jWpRVF .popup-close{position:absolute;top:0;right:0;padding:1.625rem 1.5rem;width:4.0625rem;height:4.0625rem;cursor:pointer;}.jWpRVF .loading{opacity:0.8;-webkit-animation:0.5s iHtkXv;animation:0.5s iHtkXv;display:table;position:fixed;z-index:999;left:0;top:0;width:100%;height:100%;text-align:center;background:#000;}.jWpRVF .loading-inner{display:table-cell;vertical-align:middle;}.jWpRVF .loading-inner img{margin:auto;width:11.25rem;height:11.25rem;}.jWpRVF .loading-inner p{margin-top:1.875rem;color:#fff;font-size:1.125rem;}.jWpRVF .bg-gradiant{position:relative;height:14rem;}.jWpRVF .bg-gradiant.purple{background:#8D6AE5;}.jWpRVF .bg-gradiant::after{content:'';display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(25,26,31,0.8) 0%,rgba(25,26,31,0.2) 100%);opacity:0.5;}.jWpRVF .infobox{padding-left:1rem;padding-right:1rem;height:3.25rem;line-height:3.25rem;border-radius:0.75rem;font-size:1rem;height:auto;background:#000;}.jWpRVF .infobox ul{overflow:hidden;}.jWpRVF .infobox ul li{padding:1.125rem 0;float:left;width:50%;text-align:center;}.jWpRVF .infobox ul li strong{line-height:1.75rem;}.jWpRVF .infobox ul li span{display:block;line-height:1.25rem;font-size:0.875rem;color:#BDCBDD;}.jWpRVF .infobox + .infobox{margin-top:0.5rem;}.jWpRVF .collection{position:relative;margin-top:-1rem;margin-left:-1rem;width:calc(100% + 2rem);}.jWpRVF .collection .utilbox .btn-back{float:left;padding-left:0.875rem;}.jWpRVF .collection-box{width:100%;border-bottom:0.5rem solid #2F313E;text-align:center;}.jWpRVF .collection-box h1{text-align:center;}.jWpRVF .collection-box p{padding-bottom:1.25rem;line-height:1.25rem;color:#fff;}.jWpRVF .collection-box p a{border-bottom:1px solid #fff;}.jWpRVF .collection-info{margin:0 1rem;background:#2F313E;}.jWpRVF .collection-info ul li{width:calc((100% - 0.875rem) / 3);}.jWpRVF .collection-info ul li:nth-child(2){margin:0 0.4375rem;}.jWpRVF .collection-thumb{position:relative;z-index:10;overflow:hidden;margin:-4rem auto 1rem;width:6rem;height:6rem;border-radius:50%;}.jWpRVF .collection-thumb img{object-fit:cover;}.jWpRVF .collection .title-history{margin:0 1rem;}.jWpRVF .collection .title-history > div{padding:1rem 0 2.125rem;}.jWpRVF .collection-items{padding:0 1rem 2.5rem;}.jWpRVF .collection-items > div:first-child{padding-top:1.5rem;}.jWpRVF .collection-items + .collection-items > div:first-child{border-top:1px solid #2F313E;}.jWpRVF .collection .sort{padding-bottom:2rem;}.jWpRVF .text-pink{color:#EF5DA8 !important;}.jWpRVF .text-blue{color:#76ADFF !important;}.jWpRVF .sort .btn-filter{float:right;}.jWpRVF .btn-sort{padding:0 1.125rem;border:1px solid #BDCBDD;background-color:transparent;}.jWpRVF .btn-sort svg{margin-left:1.125rem;}.jWpRVF .btn-filter{padding:0 1.375rem;border:1px solid #BDCBDD;background-color:transparent;}.jWpRVF .btn-filter svg{margin-right:0.75rem;vertical-align:middle;}.jWpRVF .btn-filter span span{margin-left:0.375rem;color:#BDCBDD;}.jWpRVF .title-center{height:2.75rem;line-height:2.75rem;font-size:1.125rem;text-align:center;}.jWpRVF .label-button .select-time{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-flex:3;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3;-webkit-flex-basis:4rem;-ms-flex-preferred-size:4rem;flex-basis:4rem;font-size:1.25rem;}.jWpRVF .label-button button{text-align:left;font-weight:500;font-size:0.875rem;}.jWpRVF .label-button button svg{margin-left:0.75rem;}.jWpRVF .collection h3 + a{display:none;}.jWpRVF .page-history h3 + a{display:none;}.jWpRVF .page-history .infobox + .infobox{margin-bottom:1.25rem;}.bdIcTA{position:fixed;z-index:99;left:0;top:0;width:100%;height:100%;pointer-events:none;}.jwLFCB{position:fixed;z-index:99;left:0;top:0;width:100%;height:100%;pointer-events:auto;}.emMbTF{position:relative;-webkit-animation:0.5s iHtkXv;animation:0.5s iHtkXv;padding:1rem 1rem 5rem;background:#191A1F;left:0;top:0;width:100%;height:100%;}.dZRKXH{position:absolute;-webkit-animation:0.5s gQeFpP;animation:0.5s gQeFpP;padding:1rem 1rem 5rem;background:#191A1F;left:0;top:0;width:100%;height:100%;}.cULALv{position:fixed;left:0;bottom:0;-webkit-animation:ls iHtkXv;animation:ls iHtkXv;padding-bottom:0.375rem;width:100%;height:4.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #90A0B7;background-color:#2F313E;}.omRoC{-webkit-flex:1;-ms-flex:1;flex:1;min-width:80px;background-color:#2F313E;}.omRoC > span{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.omRoC > span svg{fill:currentColor;display:inline-block;height:1.5rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.omRoC > span svg path{-webkit-transition:fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;transition:fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;}.omRoC > span span{color:#6C7B90;font-size:0.8125rem;-webkit-transition:color 0.2s;transition:color 0.2s;}.omRoC.active path{fill:#fff;}.omRoC.active span{color:#fff;}.iWDAgU{overflow-y:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;line-height:0;white-space:nowrap;margin-left:-1rem;width:calc(100% + 2rem);padding:0 1rem;}.iWDAgU::-webkit-scrollbar{display:none;}.iWDAgU > div{display:-webkit-inline-box;display:-webkit-inline-flex;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;min-height:8.25rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;vertical-align:top;padding:0.25rem 0 1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box;}.gZkLDR{padding-bottom:1.25rem;line-height:2.25rem;font-size:1.5rem;font-weight:600;text-align:left;color:#fff;}.eHKJgs{min-height:1.5rem;font-size:1.125rem;color:#fff;font-weight:600;}.eHKJgs svg{margin-left:0.5rem;vertical-align:-0.1875rem;}.eHKJgs + a{padding-top:0.25rem;}.iZQPDS{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-weight:bold;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;padding-left:1.625rem;padding-right:1.625rem;background-color:#48506C;color:#fff;-webkit-flex-basis:4rem;-ms-flex-preferred-size:4rem;flex-basis:4rem;font-size:NaNrem;}.iZQPDS:disabled{cursor :default;color:#90A0B7;}.hiKEYv{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-weight:bold;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;padding-left:1.625rem;padding-right:1.625rem;background-color:#5D5FEF;color:#fff;-webkit-flex-basis:4rem;-ms-flex-preferred-size:4rem;flex-basis:4rem;font-size:NaNrem;}.hiKEYv:disabled{cursor :default;color:#90A0B7;}.jjFbXR{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-weight:bold;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;padding-left:1.625rem;padding-right:1.625rem;background-color:#8D6AE5;color:#fff;width:100%;-webkit-flex-basis:4rem;-ms-flex-preferred-size:4rem;flex-basis:4rem;font-size:NaNrem;}.jjFbXR:disabled{cursor :default;color:#90A0B7;}.lmzjLU{padding-left:1rem;padding-right:1rem;height:3.25rem;line-height:3.25rem;border-radius:0.75rem;font-size:1rem;}.gFdYJL{width:2.75rem;max-width:2.75rem;height:2.75rem;position:relative;padding:0;line-height:0;border-radius:50%;}.gFdYJL svg{margin:auto;}.gFdYJL span{display:block;position:absolute;top:calc(100% + 0.5rem);left:0;width:100%;line-height:1rem;text-align:center;color:white;font-size:0.75rem;font-weight:normal;white-space:normal;}.sc-ksluID + .sc-ksluID{margin-left:0.6875rem;}.iQmpbw{position:relative;overflow:hidden;padding:0 0 1.5rem;float:left;width:calc((100% - 1.5rem) / 3);}.iQmpbw .btn-favorite{position:absolute;right:0.625rem;top:0.5rem;}.iQmpbw:nth-child(3n),.iQmpbw:nth-child(3n-1){margin-left:0.75rem;}.iQmpbw:nth-child(3n-2){clear:both;}.iQmpbw div:first-child{padding-top:100%;}.iQmpbw .card-image{margin-bottom:0.75rem;}.iQmpbw .typo-emphasis{margin-bottom:0.75rem;line-height:1.25rem;font-size:1rem;font-weight:600;}.iQmpbw .typo-emphasis svg{margin-right:0.5rem;}.iQmpbw .typo-body1{color:#A5A6F6;}.dCBajj{position:relative;overflow:hidden;padding:0 0 1.5rem;margin-bottom:0.75rem;padding:0.75rem 0.5625rem;border-radius:0.75rem;background-color:#2F313E;}.dCBajj .btn-favorite{position:absolute;right:0.625rem;top:0.5rem;}.dCBajj .card-image{float:left;margin-top:0.125rem;margin-right:1rem;width:5.5rem;padding-top:5.5rem !important;}.dCBajj .typo-emphasis{line-height:1.75rem;font-size:1.125rem;font-weight:500;}.dCBajj .typo-emphasis svg{margin-right:0.75rem;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}.dCBajj .typo-emphasis .bar{margin:0 1rem;border-left:1px solid #90A0B7;}.dCBajj .typo-emphasis .unit{margin-left:0.5rem;font-size:0.75rem;color:#BDCBDD;}.bhFgxG{display:block;width:100%;position:relative;}.bhFgxG .card-image{padding-top:75%;}.list-scroll .sc-iemWCZ .card-image{padding-top:80%;}.jPPVFO{overflow:hidden;position:relative;}.gFHNUG{display:inline-block;margin-right:0.5rem;width:1.25rem;height:1.25rem;border-radius:50%;background:#90A0B7 url(https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540) no-repeat 50%/100% auto;}.caysc{color:#76ADFF;position:relative;display:block;margin:0 0 0 auto;-webkit-flex-shrink:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:0.875rem;line-height:1.25rem;font-weight:500;}.caysc span{display:inline-block;line-height:0.875rem;vertical-align:top;}.caysc svg{margin-left:0.75rem;vertical-align:top;}.keuUfD{padding-bottom:1.25rem;}.keuUfD .search-area{position:relative;padding-top:1.75rem;height:4.5rem;}.keuUfD .search-area > a{float:left;}.keuUfD .search-area .search-box{position:relative;float:left;width:calc(100% - 2.75rem);}.keuUfD .search-area .search-box input{padding-left:2.75rem;}.keuUfD .search-area .search-box a{position:absolute;left:0;top:0;}.keuUfD .search-area .search-box + a{margin-right:-0.625rem;}.keuUfD .search-area a{background-color:transparent;}.keuUfD .search-area a span{display:none;}.keuUfD .search-area i{display:block;position:absolute;right:-0.0625rem;top:2.4375rem;width:0.291875rem;height:0.291875rem;border-radius:50%;background-color:#5D5FEF;}.jgNYay{padding-left:1rem;padding-right:1rem;height:2.75rem;line-height:2.75rem;border-radius:0.5rem;font-size:0.875rem;padding:1rem;width:100%;color:white;background-color:#2F313E;}.jgNYay::-webkit-input-placeholder{color:#6C7B90;}.jgNYay::-moz-placeholder{color:#6C7B90;}.jgNYay:-ms-input-placeholder{color:#6C7B90;}.jgNYay::placeholder{color:#6C7B90;}.jgNYay:not(:disabled):focus::-webkit-input-placeholder{color:transparent;}.jgNYay:not(:disabled):focus::-moz-placeholder{color:transparent;}.jgNYay:not(:disabled):focus:-ms-input-placeholder{color:transparent;}.jgNYay:not(:disabled):focus::placeholder{color:transparent;}.eWHAIR{display:-webkit-box;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:start;-webkit-align-items:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-bottom :0.75rem;}.jFCSIy{display:inline;}@-webkit-keyframes iHtkXv{from{opacity:0;}to{opacity:1;}}@keyframes iHtkXv{from{opacity:0;}to{opacity:1;}}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}menu,ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}html{min-width:280px;}body{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background-color:#191A1F;color:#fff;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}input,button{border:none;outline:none;padding:0;background:none;}a,button{cursor:pointer;}ol,ul,li{list-style:none;}img{display:block;width:100%;height:100%;}html,body,#root{width:100%;}.list{overflow:hidden;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}menu,ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}html{min-width:280px;}body{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background-color:#191A1F;color:#fff;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}input,button{border:none;outline:none;padding:0;background:none;}a,button{cursor:pointer;}ol,ul,li{list-style:none;}img{display:block;width:100%;height:100%;}html,body,#root{width:100%;}.list{overflow:hidden;}@-webkit-keyframes gQeFpP{from{-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible;}to{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes gQeFpP{from{-webkit-transform:translate3d(0,100%,0);-ms-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible;}to{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}
.list-scroll .card-row {
    & + .card-row {
        margin-left:0.75rem;
    }
}

.collection {
    .title-history {
        button {
            background-color:#48506C;
        }
    }
}

.collection + .popup {
    .popup-inner {
        background-color:#191A1F;
    }
}
.popup-content.detail-content {
    padding-bottom:0;
    .detailbox {
        padding-top:0;
        
    }
    .user-img {
        margin-right:6px;
    }
    .tab {
        margin:16px 0 24px;
        button {
            border-bottom:4px solid transparent;
            &.active {
                border-color:#fff;
            }
        }
    }
    .current-price {
        button {
            padding:0 16px;
            background:#8D6AE5;
        }
    }
}
////////


    margin:0 auto;
    max-width:1920px;
    width: 100%;
    height: 100%;

    .img-login {
        margin:0 auto;
        padding:${rem(100)} 0 ${rem(80)};
        width:${rem(131)};
    }

    .typo-emphasis {
        display: block;
        color: ${Var.color.white};
        svg {
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body1 {
        ${typoBody1};
        ${ellipsis};
        margin-bottom: ${rem(6)};

        & + .typo-body1 {
            margin-top: ${rem(4)};
        }
        &.pre {
            color: ${Var.color.gray3} !important;
        }
        &.basket {
            color: ${Var.color.orange} !important;
        }
        &.time {
            color: ${Var.color.pink} !important;
        }
        svg {
            margin-right: ${rem(5)};
            vertical-align: ${rem(-1)};
        }
    }
    .typo-body2 {
        ${typoBody2};
        ${ellipsis};
        margin-bottom: ${rem(6)};
        color: ${Var.color.gray3};
        &.status {
            display:flex;
            align-items:center;
            line-height: ${rem(28)};
            font-size: ${rem(16)};
            span {
                margin-right: ${rem(8)};
                svg {
                    vertical-align: ${rem(-3)};
                }
            }
        }
        &.cart {
            color: ${Var.color.purpleLight};
        }
        &.list {
            color: ${Var.color.blueLight};
        }
        &.offer {
            color: ${Var.color.orange};
        }
        &.transfer {
            color: ${Var.color.pink};
        }
    }

    .owner {
        display:flex;
        align-items:center;
        clear: both;
        margin-top: ${rem(22)};
        //height: ${rem(20)};
        > * {
            display:flex;
            align-items:center;
        }
        svg {
            margin: 0 ${rem(16)};
        }
        .type-owner {
            //margin-top:${rem(2)};
            margin-left: ${rem(8)};
            color: ${Var.color.blueLight};
            text-transform: capitalize;
            font-size: ${rem(13)};
        }
    }

    .detailbox {
        padding-top: ${rem(56)};
        .owner {
            margin-top: ${rem(10)};
            margin-bottom: ${rem(16)};
            .user-img {
                width: ${rem(24)};
                height: ${rem(24)};
            }
            .text {
                line-height: ${rem(20)};
                font-size: ${rem(14)};
                border-bottom: 1px solid ${Var.color.gray3};
            }
        }
    }
    .card-image {
        overflow: hidden;
        position: relative;
        padding-top: 100%;
        border-radius: ${rem(8)};
        img {
            position:absolute;
            left:0;
            top:0;
            object-fit: cover;
        }
    }
    .text-sub {
        color: ${Var.color.blueLight};
    }
    .tab {
        width: 100%;
        height: ${rem(56)};
        display: flex;
        justify-content: center;
    }
    .tab-content {

    }
    .title-history {
        
       button {
            padding-left: ${rem(22)};
            > span {
                width: 100%;
                text-align:left;
            }
           .text-sub {
                font-size: ${rem(14)};
           }
           svg {
               float:right;
               margin-top:${rem(19)};
           }
       }
    }
    .price {
        svg {
            margin-right:${rem(12)};
        }
        .text-sub {
            margin-left:${rem(12)};
            font-size:${rem(14)};
        }
    }
    .current-price {
        position:relative;
        margin-left:${rem(-16)};
        padding:${rem(16)};
        width:calc(100% + ${rem(32)});
        height:${rem(104)};
        border-top:1px solid ${Var.color.blackLight};
        border-top-left-radius:${rem(8)};
        border-top-right-radius:${rem(8)};
        background-color:${Var.color.blackCard};
        .typo-body1 {
            margin-bottom:${rem(15)};
            color:${Var.color.gray3};
        }
        button {
            position:absolute;
            top:${rem(16)};
            right:${rem(20)};
        }
    }
    .accordion {
        &-item {
            padding-top:${rem(4)};
            &:not(:first-child) {
                border-top: 1px solid #2F313E;
            }
        }
        &-button {
            ${radiusBox};
            display:block;
            width:100%;
            text-align:left;
            strong {
                float:left;
                font-size:${rem(18)};
                text-transform:capitalize;
                span {
                    margin-left:${rem(12)};
                    font-size:${rem(16)};
                }
            }
            svg {
                float:right;   
                margin-top:${rem(20)};
            }
            &.show {
                svg {
                    transform:rotate(180deg);
                }
            }
            &.offers + button {
                margin-top:${rem(4)};
                margin-bottom:${rem(24)};
            }
        }
        &-cont {
            display:none;
            overflow:hidden;

            > div {
                ${radiusBox};
                margin-bottom:${rem(24)};
                padding-top:${rem(12)};
                padding-bottom:${rem(12)};
                border-radius:${rem(16)};
                height:auto;
                font-size:${rem(13)};
                background:${Var.color.blackCard};
                &.market {
                    position:relative;
                    .owner {
                        margin-top:0;
                    }
                    button {
                        position:absolute;
                        text-transform:uppercase;
                        width:${rem(90)};
                        right:${rem(16)};
                        bottom:${rem(20)};
                    }
                }
                &.about {
                    float:left;
                    border:1px solid ${Var.color.purpleLight};
                    width:calc(50% - ${rem(6)});
                    &:nth-child(even) {
                        margin-left:${rem(12)};
                    }
                    .label {
                        color:${Var.color.purpleLight};
                    }
                    .item {
                        padding:${rem(6)} 0 ${rem(20)};
                        font-size:${rem(14)};
                        color:${Var.color.white};
                    }
                    .rarity {
                        font-size:${rem(14)};
                    }
                    .typo-span {
                        display:block;
                        line-height:1.45;
                    }
                }
            }
            .price {
                ${radiusBox};
                background:${Var.color.black};
            }
            .typo-span {
                color:${Var.color.gray2};
            }
            &.show {
                display:block;
            }
        }
    }
    
    .popup {
        padding:0;
        background:rgba(25,26,31,0.6);
        &-inner {
            z-index:11;
            position:fixed;
            left:0;
            bottom:0;
            width:100%;
            max-height: 100%;
            overflow-y: auto;
            border-top-left-radius:${rem(8)};
            border-top-right-radius:${rem(8)};
            background-color:${Var.color.blackCard};
        }
        &-header {
            display:flex;
            align-items:center;
            height:${rem(70)};
            border-bottom:1px solid ${Var.color.blackLight};
            h1 {
                padding-bottom:0;
                padding-left:${rem(16)};
                line-height:${rem(70)};
            }
        }
        &-content {
            padding:${rem(16)};
        }
        &-close {
            position:absolute;
            top:0;
            right:0;
            padding:${rem(26)} ${rem(24)};
            width:${rem(65)};
            height:${rem(65)};
            cursor:pointer;
        }
    }
    .loading {
        opacity:0.8;
        animation: 0.5s ${Ani.fadeIn};
        display:table;
        position: fixed;
        z-index:999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align:center;
        background:#000;
        &-inner {
            display:table-cell;
            vertical-align:middle;
            img {
                margin:auto;
                width:${rem(180)};
                height:${rem(180)};
            }
            p {
                margin-top:${rem(30)};
                color:#fff;
                font-size:${rem(18)};
            }
        }
    }

    .bg-gradiant {
        position:relative;
        height: ${rem(224)};
        &.purple {
            background:${Var.color.purpleDark};
        }
        &::after {
            content:'';
            display:block;
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            background: linear-gradient(180deg, rgba(25, 26, 31, 0.8) 0%, rgba(25, 26, 31, 0.2) 100%);
            opacity: 0.5;
        }
    }

    .infobox {
        ${radiusBox}
        height:auto;
        background:#000;
        ul {
            overflow:hidden;
            li {
                padding:${rem(18)} 0;
                float:left;
                width:50%;
                text-align:center;
                strong {
                    line-height:${rem(28)};
                }
                span {
                    display:block;
                    line-height:${rem(20)};
                    font-size: ${rem(14)};
                    color: ${Var.color.gray3};
                }
            }
        }
        & + .infobox {
            margin-top:${rem(8)};
        }
    }

    .collection {
        position: relative;
        margin-top:${rem(-16)};
        margin-left:${rem(-16)};
        width:calc(100% + ${rem(32)});
        .utilbox {
            .btn-back {
                float: left;
                padding-left: ${rem(14)};
            }
        }
        &-box {
            width:100%;
            border-bottom:${rem(8)} solid ${Var.color.blackCard};
            text-align:center;
            h1 {
                text-align:center;
    
            }
            p {
                padding-bottom:${rem(20)};
                line-height:${rem(20)};
                color:#fff;
                a {
                    border-bottom:1px solid #fff;
                }
            }
        }
        &-info {
            margin: 0 ${rem(16)};
            background:${Var.color.blackCard};
            ul {
                li {
                    &:nth-child(2) {
                        margin:0 ${rem(7)};
                    }
                    width:calc((100% - ${rem(14)}) / 3);
                }
            }
        }
        &-thumb {
            position:relative;
            z-index:10;
            overflow:hidden;
            margin:${rem(-64)} auto ${rem(16)};
            //padding:${rem(160)} 0;
            width:${rem(96)};
            height:${rem(96)};
            border-radius:50%;
            img {
                object-fit:cover;
            }
        }
        .title-history {
            margin: 0 ${rem(16)};
            > div {
                padding: ${rem(16)} 0 ${rem(34)};
            }
        }
        &-items {
            > div:first-child {
                padding-top: ${rem(24)};
            }
            padding: 0 ${rem(16)} ${rem(40)};
            + .collection-items {
                > div:first-child {
                    border-top:1px solid ${Var.color.blackCard};
                }
            }
        }
        .sort {
            padding-bottom: ${rem(32)};
        }
    }

    .text-pink {
        color: ${Var.color.pink} !important;
    }
    .text-blue {
        color: ${Var.color.blueLight} !important;
    }

    .sort {
        .btn-filter {
            float:right;
        }
    }
    .btn-sort {
        padding: 0 ${rem(18)};
        border: 1px solid ${Var.color.gray3};
        background-color:transparent;
        svg {
            margin-left: ${rem(18)};
        }
    }
    .btn-filter {
        padding: 0 ${rem(22)};
        border: 1px solid ${Var.color.gray3};
        background-color:transparent;
        svg {
            margin-right:${rem(12)};
            vertical-align:middle;
        }
        span {
            span {
                margin-left:${rem(6)};
                color: ${Var.color.gray3};
            }
        }

    }

    .title-center {
        height: ${rem(44)};
        line-height: ${rem(44)};
        font-size: ${rem(18)};
        text-align:center;
    }

    .label-button {
        .select-time {
            display: inline-flex;
            font-weight: 600;
            align-items: center;
            cursor: pointer;
            flex-grow: 3;
            flex-basis: ${rem(64)};
            font-size:${rem(20)};
        }
        button {
            text-align:left;
            font-weight:500;
            font-size:${rem(14)};
            svg {
                margin-left:${rem(12)};
            }
        }
    }
    .collection h3 + a {
        display:none;
    }
    .page-history {
        h3 + a {
            display:none;
        }
        .infobox + .infobox {
            margin-bottom:${rem(20)};
        }
    }

    .sns-buttons {
        overflow:hidden;
        > div {
            ${radiusBox};
            margin-bottom:${rem(18)};
            padding: ${rem(18)} ${rem(16)};
            width:calc(50% - ${rem(10)});
            height:auto;
            text-align:center;
            background-color:${Var.color.blackLight};
            .typo-body2 {
                color:#fff;
            }
            &:nth-child(odd) {
                float:left;
            }
            &:nth-child(even) {
                float:right;
            }
            &:hover {
                background-color:${Var.color.purpleDark};
            }
        }
    }
`;

export const Popup = styled.div`
  position: fixed;
  z-index:99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => props.hasPopup ? "auto" : "none" };
`;

export const PageBg = styled.div`
  position: ${props => props.isPopup ? "absolute" : "relative" };
  animation: 0.5s ${props => props.ani || Ani.fadeIn};
  padding: ${rem(16)} ${rem(16)} ${rem(80)};
  background: ${props => props.color || Var.color.black};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .popup-content {
      //padding: ${rem(16)} 0;
  }
`;



export const ContentBox = styled.div`
  padding: 4em;
  background: yellow;
`;

export const Table = styled.div`
  padding: 4em;
  background: blanchedalmond;
`;


export const Tab = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    animation: ls ${Ani.fadeIn};
    padding-bottom:${rem(6)};
    width: 100%;
    height: ${rem(72)};
    display: flex;
    justify-content: center;
    border-top:1px solid ${Var.color.gray2};
    background-color:${Var.color.blackCard};
`;



export const Button = styled.button`
    flex: 1;
    min-width: 80px;
    background-color:${Var.color.blackCard};

    > span {
        width: 100%;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        svg {
            fill: currentColor;
            display: inline-block;
            height: ${rem(24)};
            flex-shrink: 0;
            user-select: none;
            path {
                transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
        }
        span {
            color:${Var.color.gray1};
            font-size: ${rem(13)};
            transition: color 0.2s;
        }
    }
    &.active {
        path {
            fill: ${Var.color.white};
        }
        span {
            color:${Var.color.white};
        }
    }
`;

export const StyledScrollWrap = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    line-height: 0;
    white-space: nowrap;
    margin-left:${rem(-16)};
    width:calc(100% + ${rem(32)});
    padding:0 ${rem(16)};
    ::-webkit-scrollbar {
        display: none;
    }

    > div {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: inline-flex;
        min-height: ${rem(132)};
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        vertical-align: top;
        padding: ${rem(4)} 0 ${rem(24)};
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;

