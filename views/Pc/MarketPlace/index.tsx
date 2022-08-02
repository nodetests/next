/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { useState } from "react";
// import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import Spine from "./components/Spine";

SwiperCore.use([Autoplay, EffectFade])

export const PageContain = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 28px;
  color: #fff;
  background-image: url("home/bg/bg_2.jpg");
  background-size: 100% 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 100vh;
  }
  @media screen and (max-width: 1220px) {
    width: 1220px;
    height: 100vh;
  }
`;
export const MainContent = styled.div`
  width: 1600px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;

  .mainContentLeft {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .mainContentRight {
    width: 70%;
    height: 100%;
    @media screen and (min-width: 2000px) {
        width: 100%;
        margin-top: 100px;
    }
    overflow: hidden;
    .rightContent{
      padding:0 100px;
    }
  
    .rightOne {
      width: 525px;
      height: 195px;
      margin-top: 197px;
      img{
        width: 525px;
        height: 195px;
      }
      /* font-size: 257px;
      background: -webkit-linear-gradient(
        left,
        rgba(255, 232, 206, 0.8),
        rgba(251, 184, 160, 0.8)
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent; */
    }
    .rightTwo {
      font-size: 60px;
      margin-top: 55px;
    }
    .rightThree {
      font-size: 26px;
      margin-top: 58px;
      letter-spacing: 1.4px;
      font-weight: normal;
    }
    .rightThree div:nth-child(2){
      margin-top: 12px;
    }
    .rightFour {
      width: 100%;
      text-align: right;
      font-size: 40px;
      text-decoration: underline;
      line-height: 6px;
	    letter-spacing: 2px;
      cursor: pointer;
    }
    .rightFive {
      width: 1210px;
      margin-top: 90px;
      overflow: hidden;
      @media screen and (min-width: 2000px) {
        width: 100%;
        margin-top: 200px;
      }
      .slickContain {
        width: 1210px;
        .swiperItem {
          cursor: pointer;
          opacity: 0.4;
        }
       
        .slick-slide {
          width: 134px !important;
          height: 134px;
          opacity: 0.4;
          margin-left: 34px;
          cursor: pointer;
        }
        .slick-slide:nth-child(1){
          width: 136px !important;
          height: 136px;
          opacity: 0.4;
          margin-left: 0px;
        }
        .swiper-slide-active {
          width: 138px !important;
          height: 138px;
          opacity: 1;
          border: 2px solid #fff;
        }
      }
    }
  }
`;
export const ImgHeroBgContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

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

const MarketPlace = (props:any) => {
    const {intl} = props
    const [nowSwiperNum, setNowSwiperNum] = useState<number>(0);
    const [nowSwiperName, setNowSwiperName] = useState<string>('hero_fuxiaoxiao');

    const swiperMove = ( index: any) => {
        setNowSwiperNum(index > 14 ? 0 : index);
        setNowSwiperName(() =>heroList[index].name)
    };


    return (
        <PageContain>
            <ImgHeroBgContent>
                {/* <Image
                    src={`/home/hero/hero_${nowSwiperNum%7+1}.png`}
                    width={434}
                    height={738}
                    alt="heroBg"
                ></Image> */}
                    <img
                    src={`/home/hero/hero_${nowSwiperNum%7+1}.png`}
                    style={{width:'434px',height:'738px'}}
                    alt="heroBg"
                />
            </ImgHeroBgContent>
            <MainContent>
                <div className="mainContentLeft">
                    <Spine heroModelName={nowSwiperName} />
                </div>
                <div className="mainContentRight">
                    <div className="rightContent">
                        <div className="rightOne">
                          <img src="/home/other/NFTs.png" alt="" />
                        </div>
                        <div className="rightTwo">{intl['markPlace_rightTwo']}</div>
                        <div className="rightThree">
                            <div>1. {intl['markPlace_rightThree_1']}</div>
                            <div>2. {intl['markPlace_rightThree_2']}</div>
                        </div>
                        <div className="rightFour">{intl['markPlace_rightFour']}</div>
                    </div>
                    <div className="rightFive">
                            <div className="slickContain">
                            <Swiper
                              autoplay={{
                                  delay: 3000, // 默认延迟3s播放下一张
                                  stopOnLastSlide: false, // 播放到最后一张时停止：否
                                  disableOnInteraction: false // 用户操作轮播图后停止 ：是
                              }}
                              loop
                              centeredSlides={true}
                              className="swiper-container1"
                              spaceBetween={50}
                              slidesPerView={7}
                              slideToClickedSlide={true}
                              onSwiper={(swiper: any) =>{
                                  // console.log(swiper)
                              }}
                              onSlideChange={(swiper: any) =>{
                                swiperMove(swiper.realIndex)
                                  // console.log('slide change')
                              }}
                          >
                              {heroList.map((item) => (
                                  <SwiperSlide key={item.id}  className="swiperItem">
                                      <img src={item.url} alt="" />
                                  </SwiperSlide >
                              ))}
                          </Swiper>
                             
                            </div>
                        </div>
                </div>
            </MainContent>
        </PageContain>
    );
};
export default MarketPlace;
