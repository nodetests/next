/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCards, Navigation } from "swiper";
import { useState } from 'react';
import LazyLoad from 'react-lazyload';

export const CommonContain = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
    position: relative;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    padding: 16px;
    padding-top: 40px;
    z-index: 999;
    .mainLeft{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .leftContent{
            
            .leftOne{
                display: flex;
        justify-content: center;
            font-size: 24px;
        }
        .leftTwo{
            display: flex;
        justify-content: center;
          font-size: 12px;
          margin-top: 12px;
        }
        .leftThree{
            display: flex;
        justify-content: center;
            width: 100%;
            font-size: 12px;   
            white-space: nowrap;
            margin-top: 12px;
            img{
                width: 168px;
                height: 68px;
            }
        }
        .leftFour{
            width: 100%;
            font-size: 12px;
      
            img{
                max-width: 100%;
                max-height: 136px;
            }
        }
        .leftFive{
            font-size: 12px;
            line-height: 18px;
            margin-top: 30px;
            white-space: nowrap;
        }
        }
     
    }
    .mainRight{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .rightContent{
            width: 100%;
            display: flex;
            justify-content: center;
            padding-left: 12px;
            .directionCenter{
                width: 70%;
                height: 50%;
                img{
                    max-width: 100%;
                    max-height:100%;
                }
                .swiper-directionCenter{
                    width: 100%;
                    height: 224px;
                    position: relative;
                }
                .swiper-slide{
                    width: 100%;
                    height:224px;
                }
                /* .swiper-button-next {
                    width: 22px;
                    height: 22px;
                    background-image: url('/home/other/right.png');
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: center;
                    position: absolute;
                }
              
                .swiper-button-next::after {
                    display: none;
                }
                .swiper-button-prev{
                    width: 22px;
                    height: 22px;
                    background-image: url('/home/other/left.png');
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: center;
                    position: absolute; 
                }*/
                .swiper-button-next,.swiper-button-prev::after {
                    display: none;
                } 
            }
            div{
                display: flex;
                align-items: center;
                cursor: pointer;
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
    .bgItem{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            animation: bgAnimation 1s linear;
            z-index: 88;
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
    const { intl } = props
    const [nowSwiperNum, setNowSwiperNum] = useState<number>(0)
    const pageList = [
        { id: 'page1', url: '/home/other/page_1.png' },
        { id: 'page2', url: '/home/other/page_2.png' },
        { id: 'page3', url: '/home/other/page_3.png' },
    ]
    const bgList = [
        { id: 'bg1', url: '/home/mobel/bg_1_1.jpg' },
        { id: 'bg2', url: '/home/mobel/bg_1_2.jpg' },
        { id: 'bg3', url: '/home/mobel/bg_1_3.jpg' },
    ]
    const swiperMove = (index: number) => {
        setNowSwiperNum(index)
    }
    return (
        <CommonContain>
            <LazyLoad style={{width:'100%',height:"100%"}}>
                <BgContain>

                    <div className='bgItem' >
                        {nowSwiperNum === 0 && <img src={bgList[0].url} />}
                        {nowSwiperNum === 1 && <img src={bgList[1].url} />}
                        {nowSwiperNum === 2 && <img src={bgList[2].url} />}
                    </div>
                </BgContain>
                <MainContain>

                    <div className='mainLeft'>
                        <div className='leftContent'>
                            <div className='leftOne'>{intl['OnlinetoEarn']}</div>
                            <div className="leftTwo"> {intl['pageHeader_leftTwo']} </div>
                            <div className='leftThree'>  <img src="/home/other/O2E.png" alt="" /></div>
                            {/* <div className='leftFour'>
                                <img src="/home/other/logo.png" alt="" />
                            </div> */}
                            <div className='leftFive'>
                                <div>{intl['pageHeader_leftFive1']}</div>
                                <div>{intl['pageHeader_leftFive2']}</div>
                                <div>{intl['pageHeader_leftFive3']}</div>
                                <div>{intl['pageHeader_leftFive4']}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mainRight'>
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
                                    cardsEffect={{ slideShadows: false, }}
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
                        </div>
                    </div>
                </MainContain>
            </LazyLoad>
        </CommonContain>

    )
}
export default PageHeader