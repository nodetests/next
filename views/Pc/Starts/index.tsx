/* eslint-disable @next/next/no-img-element */
import React , { useState,useRef,useEffect } from "react";
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade,Navigation } from 'swiper'

SwiperCore.use([Autoplay,EffectFade,Navigation])

export const PageContain = styled.div`
    width: 100%;
    height: 100vh;
	font-size: 28px;
    color: #fff;
    background-size:100% 100%;
    position: relative;
    display: flex;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    @media screen and (min-width: 1920px) {
        width:100%;
        height: 100vh;
    }
    @media screen and (max-width: 1220px) {
        width:1220px;
        height: 100vh;
    }
`
export const BgContain = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #478a61;
    overflow: hidden;
    z-index: -1;
    .bgItem{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            animation: bgAnimation 0.3s linear;
        }
    }
    @keyframes bgAnimation {
        0%{
            opacity: 0.8;
        }
        100%{
            opacity: 1;
        }
    }
`
export const MainContain = styled.div`
    width: 1600px;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    z-index: 998;
	.mainLeft{
        width: 750px;
        height: 100%;
        padding-top: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        .startContain{
            width: 750px;
            height: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            .swiper-start1{
                width: 750px;
                height: 100%;
                position: relative;
            }
            .swiperItem{
                width: 100%;
                height: 260px;
                position: relative;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .swiperBg{
                width: 100%;
                height: 260px;
                position: absolute;
                top: 0;
                left: 0;
                background-image: url('/home/other/frame.png');
                background-repeat: no-repeat;
                transform-origin: center center;
                transform: rotate(-180deg);
                background-size: 100% 1000%;
                z-index: -1;
            }
            .swiperImg{
                width: 100%;
                height: 260px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .swipercChoose{
                    width: 20px;
                    height: 51px;
                    background-image: url('/home/other/choose.png');
                    background-repeat: no-repeat;
                  /* transform-origin: center center;
                     background-size: 100% 1000%; */
                    transform: rotate(-180deg);
                }
                .startImg{
                    display: flex;
                    align-items: center;
                }
                img{
                    margin-left: 51px; 
                }
            }
            .swiper-slide-prev{
                img{
                    padding-top: 12px;
                }
            }
            .swiper-slide-next{
                img{
                    padding-bottom: 12px;
                }
            }
            .swiper-slide{
                width: 100%;
                height: 260px;
                opacity: 0.7;
                display: flex;
                align-items: center;
                img{
                    width: 380px;
                    height: 208px;
                }
            }
            .swiper-slide-active{
                opacity: 1;
                display: flex;
                align-items: center;
                img{
                    width: 436px;
                    height: 238px;
                    margin-left: 30px;
                }
            }
            .swiper-button-next {
                    width: 52px;
                    height: 64px;
                    background-image: url('/home/other/right.png');
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: center;
                    position: absolute;
                    top: 720px;
                    left: 200px;
                    transform: rotate(90deg);
                    transform-origin:center center;
            }

            .swiper-button-next::after {
                display: none;
            }
            .swiper-button-prev{
                width: 52px;
                height: 64px;
                background-image: url('/home/other/left.png');
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: center;
                position: absolute;
                top: 38px;
                left: 200px;
                transform: rotate(90deg);
                transform-origin:center center;
            }
            .swiper-button-prev::after {
                display: none;
            }
          
        }
         
    }
    .mainRight{
        width: 50%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 998;
        padding-left: 100px;
        padding-top: 90px;
        .rightContain{
            width: 886px;
            height: 886px;
            .starts{
                width: 886px;
                font-size: 180px;
                /* text-align: center; */
            }
            .quality{
                /* display: flex; */
                /* justify-content: center;
                align-items:center; */
                margin-top: 60px;
                @media screen and (min-width: 2000px) {
                    margin-top: 120px;
                }
                span{
                    display: inline-block;
                }
                span:nth-child(1){
                    font-size: 180px;
                }
                span:nth-child(2){
                    font-size: 100px;
                    margin-left: 50px;
                }
            }
            .attributeContain{
                width: 886px;
                margin: 90px 0 0 0;
                .attributeNote{
                    display: flex;
                    justify-content: flex-start;
                    div:nth-child(1){
                        font-size: 39px;
                    }
                    div:nth-child(2){
                        font-size: 20px;
                        margin-left:22px;
                        display: flex;
                        align-items: center;
                    }
                }
                .attributeImgContain{
                    width: 886px;
                    height: 200px;
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 45px;
                }
                .attributeItem{
                    width: 73px;
                    height: 73px;
                    position: relative;
                    display: flex;
                    justify-content: flex-start;
                    margin-left: 78px;
                    cursor: pointer;
                }
                .attributeItem:nth-child(1){
                    margin-left: 0;
                }
                .borderItem{
                    position: absolute;
                    top:0;
                    left: 0;
                    width: 73px;
                    height: 73px;
                    transform: rotate(45deg);
                    border: 2px solid #fff;
                }
            }
        }
    }
  
`
const bgList = [
    { id: 'n', name: 'n', url: '/home/bg/bg_3_n.jpg' },
    { id: 'r', name: 'r', url: '/home/bg/bg_3_r.jpg' },
    { id: 'sr', name: 'sr', url: '/home/bg/bg_3_sr.jpg' },
    { id: 'ssr', name: 'ssr', url: '/home/bg/bg_3_ssr.jpg' },
]
const starList = [
    { id: 'n', name: 'n', url: '/home/other/n.png' },
    { id: 'r', name: 'r', url: '/home/other/r.jpg' },
    { id: 'sr', name: 'sr', url: '/home/other/sr.png' },
    { id: 'ssr', name: 'ssr', url: '/home/other/ssr.png' },
]
const attributeList = [
    { id: 'attack', quality: 'attack', url: '/home/other/icon_1.png' },
    { id: 'defense', quality: 'defense', url: '/home/other/icon_2.png' },
    { id: 'hp', quality: 'hp', url: '/home/other/icon_3.png' },
    { id: 'luck', quality: 'hp', url: '/home/other/icon_4.png' },
]

SwiperCore.use([Autoplay, EffectFade])

const Stats = (props: any) => {
    const { intl } = props
    const [nowStartNum, setNowStartNum] = useState<number>(0)
    // 每秒执行一次 用于Attribute样式更改 useRef使用是为了解决定时器重复创建的问题 
    // 理由是useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变
    const [nowAttributeNum, setNowAttributeNum] = useState<number>(0)
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);

    const startMove= ( index: any) => {
        setNowStartNum(index)
    }
    
    const saveCallBack: any = useRef();
    // 此函数做数据处理
    const callBack = () => {
        let num:number = nowAttributeNum
        num++
        if(num>3){
            setNowAttributeNum(0)
        }else{
            setNowAttributeNum(num)
        }
    }
    const attributeHandler = (val:number) =>{
        setNowAttributeNum(val)
    }
    // 此函数就是将数据处理函数植入useRef
    useEffect(() => {
        saveCallBack.current = callBack
        return () => {}
    });

    useEffect(() => {
        const tick = () => {
            saveCallBack.current();
        }
        const timer: NodeJS.Timeout = setInterval(tick, 3000)
        timers.push(timer)
        setTimers(timers)
        return () => {
            clearInterval(timer)
        }
    }, [])



    return (
        <PageContain>
            <BgContain>
                <div className="bgItem" style={{background:'rgba(135,98,212)'}}>
                {nowStartNum === 0&& <img src={bgList[0].url} alt="" />}
                    {nowStartNum === 1&& <img src={bgList[1].url} alt="" />} 
                    {nowStartNum === 2&& <img src={bgList[2].url} alt="" />}  
                    {nowStartNum === 3&& <img src={bgList[3].url} alt="" />} 
                </div>   
            </BgContain>
            <MainContain>
                <div className="mainLeft">
                    <div className="startContain">
                        <Swiper
                            autoplay={{
                                delay: 3000, // 默认延迟3s播放下一张
                                stopOnLastSlide: false, // 播放到最后一张时停止：否
                                disableOnInteraction: false // 用户操作轮播图后停止 ：是
                            }}
                            loop
                            navigation={true}
                            centeredSlides={true}
                            direction={"vertical"}
                            className="swiper-start1"
                            spaceBetween={50}
                            slidesPerView={3}
                            slideToClickedSlide={true}
                            onSwiper={(swiper: any) =>{
                                // console.log(swiper)
                            }}
                            onSlideChange={(swiper: any) =>{
                                startMove(swiper.realIndex)
                                // console.log('slide change')
                            }}
                        >
                            {starList.map((item:any,index:number) => (
                                <SwiperSlide key={item.id} >
                                    <div  className="swiperItem" >
                                        <div className="itemContent">
                                            <div className="swiperImg">
                                                {nowStartNum === index && <div className="swipercChoose"></div>}
                                                <div className="startImg">  <img src={item.url} alt="" /></div>
                                            </div> 
                                        </div>
                                        <div className="swiperBg"> </div>
                                    </div>
                                  
                                </SwiperSlide >
                            ))}
                        </Swiper>
                    </div>

                </div>
                <div className="mainRight">
                    <div className="rightContain">
                        <div className="starts">STARTS</div>
                        <div className="quality">
                            {nowStartNum === 0 && (<span><span style={{ opacity: 0.9 }}>N</span> <span style={{ opacity: 0.8 }}>68%</span></span>)}
                            {nowStartNum === 1 && (<span><span style={{ opacity: 0.9 }}>R</span> <span style={{ opacity: 0.8 }}>27%</span></span>)}
                            {nowStartNum === 2 && (<span><span style={{ opacity: 0.9 }}>SR</span> <span style={{ opacity: 0.8 }}>4.7%</span></span>)}
                            {nowStartNum === 3 && (<span><span style={{ opacity: 0.9 }}>SSR</span> <span style={{ opacity: 0.8 }}>0.3%</span></span>)}
                        </div>
                        <div className="attributeContain">
                            {nowAttributeNum === 0 && (
                                <div className="attributeNote">
                                    <div>{intl['start_attributeNote_title1']}</div>
                                    <div>{intl['start_attributeNote_note1']}</div>
                                </div>
                            )}
                            {nowAttributeNum === 1 && (
                                <div className="attributeNote">
                                    <div>{intl['start_attributeNote_title2']}</div>
                                    <div>{intl['start_attributeNote_note2']}</div>
                                </div>
                            )}
                            {nowAttributeNum === 2 && (
                                <div className="attributeNote">
                                    <div>{intl['start_attributeNote_title3']}</div>
                                    <div>{intl['start_attributeNote_note3']}</div>
                                </div>
                            )}
                            {nowAttributeNum === 3 && (
                                <div className="attributeNote">
                                    <div>{intl['start_attributeNote_title4']}</div>
                                    <div>{intl['start_attributeNote_note4']}</div>
                                </div>
                            )}
                         
                            <div className="attributeImgContain">
                                {attributeList.map((item, index: number) => (
                                    <div className="attributeItem" key={item.id} onClick={() => {attributeHandler(index)}}>
                                        <img src={item.url} alt="" />
                                        {nowAttributeNum === index && (
                                            <div className="borderItem"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MainContain>
        </PageContain>
    )
}
export default Stats