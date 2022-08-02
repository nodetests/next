/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { useState } from 'react';
import LazyLoad from 'react-lazyload';

export const CommonContain = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    background-image: url('home/mobel/bg_6.jpg');
    background-size: 100% 100%;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 16px 0 16px;
`
export const MainContainTop = styled.div`
    width: 100%;
    height: 20%;
    .title{
        font-size: 26px;
    }
`

export const MainContainBottom = styled.div`
    width: 100%;
    height: 20%;
    .content{
        width: 100%;
        display: flex;
        justify-content: center;
        .text{
            height: 80px;
            .textTitle{
                font-size: 14px;
            }
            .textContent{
                    font-size: 12px;
            }
        }
    }
    .swiper{
        width: 100%;
        height: 68px;
        .swiper-container{
            width: 100%;
            height: 34px;
        }
     
        img{
            width: 34px;
            height: 34px;
         
        }
        .swiper-slide{
            opacity: 0.3;
        }
        .swiper-slide-active{
            opacity: 1;
        }
    }
`

const RoadMap = (props: any) => {
    const { intl } = props
    const [nowQNum, setNowQNum] = useState<number>(0)
    const roadImgList = [
        { id: '1', url: '/home/other/map_1.png' },
        { id: '2', url: '/home/other/map_1.png' },
        { id: '3', url: '/home/other/map_1.png' },
        { id: '4', url: '/home/other/map_1.png' },
        { id: '5', url: '/home/other/map_1.png' },
    ]
    const swiperMove = (val: any) => {
        setNowQNum(val)
    }

    return (
        <CommonContain>
            <LazyLoad style={{ width: '100%', height: "100%" }}>
                <MainContain>
                    <MainContainTop>
                        <div className="title">
                            Road Map
                        </div>
                    </MainContainTop>
                    <MainContainBottom>
                        <div className="content">
                            {nowQNum === 0 &&
                                <div className="text">
                                    <div className="textTitle">Q1 2021</div>
                                    <span className="textContent">{intl['roadMapq1_1']},{intl['roadMapq1_2']},{intl['roadMapq1_3']}</span>
                                </div>
                            }
                            {nowQNum === 1 &&
                                <div className="text">
                                    <div className="textTitle">Q2 2021</div>
                                    <div className="textContent">{intl['roadMapq2_1']},{intl['roadMapq2_2']},{intl['roadMapq2_3']}</div>
                                </div>
                            }
                            {nowQNum === 2 &&
                                <div className="text">
                                    <div className="textTitle">Q3 2022</div>
                                    <div className="textContent">{intl['roadMapq3_1']},{intl['roadMapq3_2']},{intl['roadMapq3_3']},{intl['roadMapq3_4']}</div>
                                </div>
                            }
                            {nowQNum === 3 &&
                                <div className="text">
                                    <div className="textTitle">Q4 2022</div>
                                    <div className="textContent">{intl['roadMapq4_1']},{intl['roadMapq4_2']},{intl['roadMapq4_3']},{intl['roadMapq4_4']}</div>
                                </div>
                            }
                            {nowQNum === 4 &&
                                <div className="text">
                                    <div className="textTitle">Q5 2022</div>
                                    <div className="textContent">{intl['roadMapq5_1']},{intl['roadMapq5_2']},{intl['roadMapq5_3']},{intl['roadMapq5_4']}</div>
                                </div>
                            }
                        </div>
                        <div className="swiper">
                            <Swiper
                                autoplay={{
                                    delay: 3000, // 默认延迟3s播放下一张
                                    stopOnLastSlide: false, // 播放到最后一张时停止：否
                                    disableOnInteraction: false // 用户操作轮播图后停止 ：是
                                }}
                                loop
                                className="swiper-container"
                                spaceBetween={50}
                                slidesPerView={5}
                                centeredSlides={true}
                                onSwiper={(swiper: any) => {
                                    // console.log("bgbgbg",swiper)
                                }}
                                onSlideChange={(swiper: any) => {
                                    // console.log("bgbgbg",swiper.realIndex)
                                    swiperMove(swiper.realIndex)
                                }}
                            >
                                {roadImgList.map((item: any) => (
                                    <SwiperSlide key={item.id} >
                                        <img src={item.url} alt="" />
                                    </SwiperSlide >
                                ))}
                            </Swiper>
                        </div>
                    </MainContainBottom>
                </MainContain>
            </LazyLoad>
        </CommonContain>
    )
}
export default RoadMap