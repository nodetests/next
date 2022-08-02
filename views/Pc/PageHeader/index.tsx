/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Autoplay,EffectCards,Navigation } from "swiper";
// import Image from 'next/image'
SwiperCore.use([Autoplay,EffectCards,Navigation])

export const PageContain = styled.div`
    width: 100%;
    height: 100vh;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
    /* background-image: url('home/bg/bg_1_1.jpg'); */
    background-size:100% 100%;
    display:flex;
    justify-content:center;
     align-items:center;
    @media screen and (min-width: 1920px) {
        width:100%
    }
    @media screen and (max-width: 1220px) {
        width:1220px
    }
`
// export const ContentContain = styled.div`
//     width: 100%;
//     height: 100vh;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     @media screen and (min-width: 1920px) {
//         width:100%
//     }
// `
export const MainContent = styled.div`
    width: 1600px;
    height: 100vh;
    display:flex;
    justify-content:flex-start;
    z-index: 998;
   
    .mainContentLeft{
        width:800px;
        height: 100vh;
        color: #ffffff;
        display:flex;
        justify-content:center;
        align-items: center;
        overflow: hidden;
        .leftContent{
            width: 742px;
            height: 662px;
            text-align: center;
        }
        .leftOne{
            height: 120px;
            font-size: 100px;
            letter-spacing: -1px;
        }
        .leftTwo{
            height: 20px;
            font-size: 18px;
            text-align: right;
            padding-right: 55px;
        }
        .leftThree{
          width: 742px;
          height: 302px;
          margin: 23px 0 23px 0;
            /* background: -webkit-linear-gradient(left,rgba(244,230,245,1), #fbcdd0);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent; */
        }
        .leftFour{
            height: 100px;
            display: flex;
            justify-content: center;
        }
        .leftFive{
            height: 54px;
            text-align: left;
            font-size: 20px;
            margin-top: 38px;
            line-height: 36px;
        }
    }
    .mainContentRight{
        width:800px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rightContent{
            display: flex;
            justify-content: flex-start;
            margin-left: 100px;
            margin-top: 150px;
            .directionCenter{
                width: 380px;
                height: 707px;
            
                .swiper-directionCenter{
                    width: 380px;
                    height: 707px;
                    position: relative;
                }
                .swiper-button-next {
                    width: 52px;
                    height: 64px;
                    background-image: url('/home/other/right.png');
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: center;
                    position: absolute;
                    right:-156px
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
                    left:-156px
                }
                .swiper-button-prev::after {
                    display: none;
                }
            }
            div{
                display: flex;
                align-items: center;
                cursor: pointer;
            }
    }
    
`
export const BgContain = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    .bgItem{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            animation: bgAnimation 1s linear;
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

const PageHeader = (props: any) => {
    const { intl,windowWidth } = props
    const [nowSwiperNum,setNowSwiperNum] = useState<number>(0)
    const bgList = [
        { id: 'bg1', url: '/home/bg/bg_1_1.jpg' },
        { id: 'bg2', url: '/home/bg/bg_1_2.jpg' },
        { id: 'bg3', url: '/home/bg/bg_1_3.jpg' },
    ]
    const pageList = [
        { id: 'page1', url: '/home/other/page_1.png' },
        { id: 'page2', url: '/home/other/page_2.png' },
        { id: 'page3', url: '/home/other/page_3.png' },
    ]
    const swiperMove = (index:number) =>{
        setNowSwiperNum(index)
    }
    return (
        <PageContain>
            <BgContain>
                <div className='bgItem' style={{background:'rgba(135,98,212)'}}>
                 {nowSwiperNum === 0&& <img src={bgList[0].url} />}
                 {nowSwiperNum === 1&& <img src={bgList[1].url} />}
                 {nowSwiperNum === 2&& <img src={bgList[2].url} />}
                </div>
            </BgContain>
            <MainContent>
                <div className="mainContentLeft">
                    <div className="leftContent">
                        <div className="leftOne">
                            {intl['OnlinetoEarn']}
                        </div>
                        <div className="leftTwo"> {intl['pageHeader_leftTwo']} </div>
                        <div className='leftThree'>
                            {/* <Image width={742} height={302} src="/home/other/O2E.png" alt="nft" /> */}
                            <img src="/home/other/O2E.png" alt="" style={{ width: '742px', height: '302px' }} />
                        </div>
                        <div className='leftFour'>
                            {/* <Image width={338} height={99} src="/home/other/logo.png" alt="nft" /> */}
                            <img src="/home/other/logo.png" alt="" style={{ width: '338px', height: '99px' }} />
                        </div>
                        <div className="leftFive">
                            {intl['pageHeader_leftFive']}
                        </div>
                    </div>

                </div>
                <div className="mainContentRight">
                    <div className='rightContent'>
                        <div className='directionCenter'>
                            <Swiper
                                autoplay={{
                                    delay: 3000, // 默认延迟3s播放下一张
                                    stopOnLastSlide: false, // 播放到最后一张时停止：否
                                    disableOnInteraction: false // 用户操作轮播图后停止 ：是
                                }}
                                loop
                                navigation={true}
                                effect={'cards'}
                                cardsEffect={{slideShadows: false,} }
                                centeredSlides={true}
                                className="swiper-directionCenter"
                                spaceBetween={50}
                                slidesPerView={1}
                                slideToClickedSlide={true}
                                onSwiper={(swiper: any) => {
                                    // console.log(swiper)
                                }}
                                onSlideChange={(swiper: any) => {
                                    swiperMove(swiper.realIndex)
                                    // console.log('slide change')
                                }}
                            >
                                {pageList.map((item) => (
                                    <SwiperSlide key={item.id} className="swiperItem">
                                        <img src={item.url} alt="" style={{ width: '350px', height: '707px' }} />
                                    </SwiperSlide >
                                ))}
                            </Swiper>
                        </div>
                        {/* <div className='directionRight'>
                          
                            <img src='/home/other/right.png' alt="" style={{ width: '52px', height: '64px' }} />
                        </div> */}
                    </div>
                </div>

            </MainContent>
        </PageContain>
    )
}
export default PageHeader