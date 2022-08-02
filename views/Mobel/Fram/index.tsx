/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyLoad from 'react-lazyload';

export const CommonContain = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    z-index: 98;
    padding: 40px 16px 0 16px;
    .mainContent{
        width: 100%;
        height: 100%;
        .imgContent{
            width: 100%;
            height: 195px;
            display: flex;
            justify-content: center;
            .content{
                width: 90%;
                height: 195px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    margin-left: -12px;
                }
                .framBorder{
                    width: 100%;
                    height: 195px;
                    border: 1px solid #fff;
                    position: absolute;
                    left: 12px;
                    top: -12px;
                }
            }
        }
    
    }
    .mainContentBottom{
        width: 100%;
        height: 80px;
        margin-top: 10px;
        margin-left: 2px;
        .bottomContain{
            width: 350px;
            height: 50px;
            .swiper-bottomcontainer{
                width: 350px;
                height: 100%;  
            }
        
            .swiper-slide{
                width: 108px !important;
                margin-right: 0px !important;
                margin-left:22px;
            }
            .swiper-slide:nth-child(1){
                margin-left: 12px;
            }
            .swiper-slide-active{
                width: 108px !important;
                height: 39px;
            }
            /* .swiper-slide-active::after{
                width: 108px !important;
                height: 39px;
                display:block;
                background-size: 100% 100%;
                background-image: url('/home/other/frame.png');
                transform: rotate(180deg);
            } */
            .swiper-button-next::after,.swiper-button-prev::after {
                display: none;
            }
            .framItem{
                width: 108px !important;
                height: 39px;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            .framItemBg{
                position: absolute;
                left: 0;
                top: 0;
                width: 108px;
                height: 39px;
                background-image: url('/home/other/frame.png');
                background-size: 100% 100%;
                transform: rotate(180deg);
            }
            .itemMain{
                display: flex;
                justify-content: flex-end;
                .framicon{
                    transform: rotate(180deg);
                    margin-right: 3px;
                }
                img{
                    width: 5px;
                    height: 14px;
                }
            }
            .framNotes{
                width: 100%;
                font-size: 12px;
                /* padding-left: 12px; */
                margin-top: 10px;
            }
        }
    }
`
export const BgContain = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    img{
        width: 100% ;
        height: 100%;
    }
    /* .swiper-container{
        width: 100% ;
        height: 100%;
        img{
            width: 100% ;
            height: 100%;
        }
    }
    .swiper-slide .swiper-slide-active{
        width: 100% ;
        height: 100%;
        img{
            width: 100% ;
            height: 100%;
        }
    } */
`


const Fram = (props: any) => {
    const { intl } = props
    // const [select, setSelect] = useState<any>('1')
    // const [selectNotes, setSelectNotes] = useState<any>( intl[''])
    // const [nowBgNum, setNowBgNum] = useState<number>(0)
    const [nowNotesNum, setNowNotesNum] = useState<number>(0)
    const framList = [
        { id: '1', name: intl['fram_title1'], notes: intl['fram_note1'], icon: '/home/other/choose.png' },
        { id: '2', name: intl['fram_title2'], notes: intl['fram_note2'], icon: '/home/other/choose.png' },
        { id: '3', name: intl['fram_title3'], notes: intl['fram_note3'], icon: '/home/other/choose.png' },
    ]
    // const bgList = [
    //     { id: 'farm', url: '/home/mobel/bg_4_farm.jpg' },
    //     { id: 'pvp', url: '/home/mobel/bg_4_pve.jpg' },
    //     { id: 'pve', url: '/home/mobel/bg_4_pvp.jpg' },
    // ]

    // const bgMove = (index: any) => {
    //     setNowBgNum(index)
    // }
    const swiperMove = (index: number) => {
        setNowNotesNum(index)
    }
    const framItemHandel = (val: any) => {
        // setSelect(val.id)
        // setSelectNotes(val.notes)
    }
    return (

        <CommonContain>
            <LazyLoad style={{ width: '100%', height: "100%" }}>
                <BgContain>
                {nowNotesNum === 0 && <img src="/home/mobel/bg_4_farm.jpg" alt="" />}
                {nowNotesNum === 1 && <img src="/home/mobel/bg_4_pve.jpg" alt="" />}
                {nowNotesNum === 2 && <img src="/home/mobel/bg_4_pvp.jpg" alt="" />}
                    {/* <Swiper
                        autoplay={{
                            delay: 3000, // 默认延迟3s播放下一张
                            stopOnLastSlide: false, // 播放到最后一张时停止：否
                            disableOnInteraction: false // 用户操作轮播图后停止 ：是
                        }}
                        loop
                        effect="fade"
                        className="swiper-container"
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper: any) => {
                            // console.log("bgbgbg",swiper)
                        }}
                        onSlideChange={(swiper: any) => {
                            // console.log("bgbgbg",swiper.realIndex)
                            bgMove(swiper.realIndex)
                        }}
                    >
                        {bgList.map((item) => (
                            <SwiperSlide key={item.id} >
                                <img src={item.url} alt="" />
                            </SwiperSlide >
                        ))}startMove
                    </Swiper> */}
                </BgContain>
                <MainContain>
                    <div className="mainContent">
                        <div className="imgContent">
                            <div className="content">
                                {nowNotesNum === 0 && <img src="/home/other/farm.jpg" alt="" />}
                                {nowNotesNum === 1 && <img src="/home/other/pve.png" alt="" />}
                                {nowNotesNum === 2 && <img src="/home/other/pvp.png" alt="" />}
                                <div className="framBorder"></div>
                            </div>
                        </div>
                        <div className="mainContentBottom">
                            <div className="bottomContain">
                                <Swiper
                                    autoplay={{
                                        delay: 3000, // 默认延迟3s播放下一张
                                        stopOnLastSlide: false, // 播放到最后一张时停止：否
                                        disableOnInteraction: false // 用户操作轮播图后停止 ：是
                                    }}
                                    loop
                                    navigation={true}
                                    className="swiper-container1"
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    slideToClickedSlide={true}
                                    onSwiper={(swiper: any) => {
                                        // console.log(swiper)
                                    }}
                                    onSlideChange={(swiper: any) => {
                                        swiperMove(swiper.realIndex)
                                        // console.log('slide change')
                                    }}
                                >
                                    {framList.map((item,index) => (
                                        <SwiperSlide key={item.id} className="swiperItem">
                                            <div className='framItem' onClick={() => { framItemHandel(item) }}>
                                                <div className="itemMain">
                                                    <div className="framicon"><img src={item.icon} alt="" /></div>
                                                    <div className="framname">{item.name}</div>
                                                </div>
                                              {index ===nowNotesNum && <div className="framItemBg"> </div>}  
                                            </div>
                                        </SwiperSlide >
                                    ))}
                                </Swiper>
                                <div className="framNotes">
                                    <span>{intl[`fram_note${nowNotesNum + 1}`]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </MainContain>
            </LazyLoad>
        </CommonContain>

    )
}
export default Fram