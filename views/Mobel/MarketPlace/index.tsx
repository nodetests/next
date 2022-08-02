/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

export const CommonContain = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 16px 0 16px;
    color: #fff;
    background-image: url("home/mobel/bg_2.jpg");
    background-size: 100% 100%;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
`
export const MainTop = styled.div`
    width: 100%;
    height: 234px;
    display: flex;
    justify-content: flex-start;
    .topLeft{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            max-width: 130px;
            max-height: 200px;
        }
    }
    .topRight{
        width: 50%;
        height: 100%;
        .rightOne{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            img{
                width: 142px;
                height: 50px;
            }
        }
        .rightTwo{
            margin-top: 21px;
            margin-bottom: 17px;
            font-size: 15px;
            text-align: right;
        }
        .rightThree{
            font-size: 12px;
            line-height: 20px;
        }
        .rightFour{
            text-align: right;
            margin-top: 27px;
        }
    }
`
export const MainBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiperContain{
        width: 100%;
        height: 40px;
    }
    .swiperItem {
        cursor: pointer;
        opacity: 0.4;
    }
    .swiper-slide{
        /* width: 40px !important;
        height: 40px; */
        margin-right: 49px !important;
       
        img{
            width: 40px;
            height: 40px;
        }
    }
    .swiper-slide:nth-child(1){
        /* width:40px;
        height: 40px;
        opacity: 0.4;
        margin-right: 0px !important;
        margin-left:0px; */
    }
    .swiper-slide-active {
        opacity: 1;
    }
    .swiper-button-next {
        width: 22px;
        height: 22px;
        background-image: url('/home/other/right.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;
        position: absolute;
    }
  
    .swiper-button-prev{
        width: 22px;
        height: 22px;
        background-image: url('/home/other/left.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;
        position: absolute; 
    }
    .swiper-button-next,.swiper-button-prev{
        margin-top: -9px;
    }
    .swiper-button-next::after,.swiper-button-prev::after {
        display: none;
    }
    
`
export const ImgHeroBgContent = styled.div`
  position: absolute;
  left: -16px;
  top: -40px;
  img{
    width: 100%;
    height: 100%;
  }
`

const heroList = [
    { id: "hero_s_1", name: "hero_fuxiaoxiao", url: "/home/hero/hero_s_1.png" },
    { id: "hero_s_2", name: "hero_huziyan", url: "/home/hero/hero_s_2.png" },
    { id: "hero_s_3", name: "hero_baiqin", url: "/home/hero/hero_s_3.png" },
    { id: "hero_s_4", name: "hero_mengqingqiu", url: "/home/hero/hero_s_4.png" },
    { id: "hero_s_5", name: "hero_yangxiaoqi", url: "/home/hero/hero_s_5.png" },
    { id: "hero_s_6", name: "hero_boyan", url: "/home/hero/hero_s_6.png" },
    { id: "hero_s_7", name: "hero_xulanruo", url: "/home/hero/hero_s_7.png" },
    { id: "hero_s_8", name: "hero_fuxiaoxiao", url: "/home/hero/hero_s_1.png" },
    { id: "hero_s_9", name: "hero_huziyan", url: "/home/hero/hero_s_2.png" },
    { id: "hero_s_10", name: "hero_baiqin", url: "/home/hero/hero_s_3.png" },
    { id: "hero_s_11", name: "hero_mengqingqiu", url: "/home/hero/hero_s_4.png" },
    { id: "hero_s_12", name: "hero_yangxiaoqi", url: "/home/hero/hero_s_5.png" },
    { id: "hero_s_13", name: "hero_boyan", url: "/home/hero/hero_s_6.png" },
    { id: "hero_s_14", name: "hero_xulanruo", url: "/home/hero/hero_s_7.png" },
];

const MarketPlace = (props: any) => {
    const { intl } = props

    const [nowSwiperNum, setNowSwiperNum] = useState<number>(0);
    const swiperMove = (index: any) => {
        setNowSwiperNum(index > 14 ? 0 : index);
    };

    return (
        <CommonContain>

            <MainContain>
                <ImgHeroBgContent>
                    <LazyLoad style={{ width: '100%', height: "100%" }}>
                        <img
                            src={`/home/hero/hero_${nowSwiperNum % 7 + 1}.png`}
                            style={{ width: '104', height: '210px' }}
                            alt="heroBg"
                        />
                    </LazyLoad>
                </ImgHeroBgContent>
                <MainTop>
                    <div className='topLeft'>
                        <LazyLoad>
                            <img
                                src={`/home/hero_s/hero_${nowSwiperNum % 7 + 1}.png`}
                                alt="heroBg"
                            />
                        </LazyLoad>
                    </div>
                    <div className='topRight'>
                        <div className="rightOne">
                            <img src="/home/other/NFTs.png" alt="" />
                        </div>
                        <div className="rightTwo">{intl['markPlace_rightTwo']}: </div>
                        <div className="rightThree">
                            <div>1. {intl['markPlace_rightThree_1']}</div>
                            <div>2. {intl['markPlace_rightThree_2']}</div>
                        </div>
                        <div className="rightFour">{intl['markPlace_rightFour']}</div>
                    </div>
                </MainTop>
                <MainBottom>
                    <div className="swiperContain">
                        <Swiper
                            autoplay={{
                                delay: 3000, // 默认延迟3s播放下一张
                                stopOnLastSlide: false, // 播放到最后一张时停止：否
                                disableOnInteraction: false // 用户操作轮播图后停止 ：是
                            }}
                            loop
                            navigation={true}
                             lazy={true}
                            centeredSlides={true}
                            className="swiper-container1"
                            spaceBetween={50}
                            slidesPerView={7}
                            slideToClickedSlide={true}
                            onSwiper={(swiper: any) => {
                                // console.log(swiper)
                            }}
                            onSlideChange={(swiper: any) => {
                                swiperMove(swiper.realIndex)
                                // console.log('slide change')
                            }}
                        >
                            {heroList.map((item) => (
                                <SwiperSlide key={item.id} className="swiperItem">
                                   
                                        <img src={item.url} alt="" />
                                   
                                </SwiperSlide >
                            ))}
                        </Swiper>

                    </div>
                </MainBottom>
            </MainContain>

        </CommonContain>

    )
}
export default MarketPlace