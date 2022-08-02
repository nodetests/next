/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper'

SwiperCore.use([Autoplay, EffectFade])

export const PageContain = styled.div`
    width: 100%;
    height: 100vh;
	font-size: 28px;
    color: #fff;
    /* background-image: url('home/bg/bg_4_farm.jpg'); */
    background-size:100% 100%;
    position: relative;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 1920px) {
        width:100%;
        height: 100vh;
    }
    @media screen and (max-width: 1220px) {
        width:1220px;
        height: 100vh;
    }
`
export const MainContain = styled.div`
    width: 1600px;
    height: 100vh;
    position:relative;
    display: flex;
    justify-content: flex-start;
    z-index: 998;
	.mainLeft{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .leftContain{
            width: 100%;
            height: 500px;
            position: relative;
            margin-top: 40px;
            img{
                display: block;
                width: 900px;
                height: 500px;
            }
            .framBorder{
                width: 900px;
                height: 500px;
                border: 2px solid #fff;
                position: absolute;
                left: 50px;
                bottom: 50px;
            }
        }
    }
    .mainRight{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
        .rightContain{
            width: 500px;
            height: 754px;
            .swiper-fram{
                width: 100%;
                height: 100%;
            }
            .swiper-slide{
                width: 100%;
                height:200px !important;
            }
            .swiper-slide-active{
                width: 100%;
                height: 300px !important;
            }
            .framItem{
                width: 500px;
                background-size: 100% 100%;
                margin-top: 100px;
            }
            .framItemActive{
                width: 500px;
                height: 153px;
                background-size: 100% 100%;
                margin-top: 100px;
                background-image: url('/home/other/frame.png');
                display: flex;
                align-items: center;
            }
            .itemMain{
                display: flex;
                justify-content: flex-end;
            }
            .framname{
                width: 481px;
                font-size: 60px;
                color: #fff;
                cursor: pointer;
                text-align: center;
            }
            .framicon{
                display: flex;
                align-items: center;
                img{
                    width: 19px;
                    height: 51px;
                }
            }
            .framNotes{
                width: 100%;
                font-size: 20px;
                display: flex;
                justify-content: center;
                margin-top: 18px;
                margin-bottom: 94px;
                .notesContain{
                    width: 327px;
                }
            }
        }
    }
  
`
export const BgContain = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #478a61;
    img{
        width: 100% ;
        height: 100%;
    }
`

// function useInterval(callback: any, interval: any) {
//     useEffect(() => {
//         const start = new Date().getTime()
//         const I = setInterval(() => {
//             callback(new Date().getTime() - start)
//         }, interval)
//         return () => clearInterval(I)
//     }, [])
// }

// function useSilder(N: any, speed:number) {
//     const [select,setSelect] = useState<number>(1)
//     let num = select
//     useInterval((diff: any) => {setSelect(() => num<=3?num++:1) }, 1000)
//     return select
// }

const Fram = (props: any) => {
    const { intl,windowWidth } = props

    // const [nowBgNum, setNowBgNum] = useState<number>(0)
    // const [select, setSelect] = useState<any>('1')
    const [swiperNum, setNowswiperNum] = useState<number>(0)
    const framList = [
        { id: '1', name: intl['fram_title1'], notes: intl['fram_note1'], icon: '/home/other/choose.png' },
        { id: '2', name:  intl['fram_title2'], notes: intl['fram_note2'], icon: '/home/other/choose.png' },
        { id: '3', name: intl['fram_title3'], notes: intl['fram_note3'], icon: '/home/other/choose.png' },
    ]
    const bgList = [
        { id: 'farm', url: '/home/bg/bg_4_farm.jpg' },
        { id: 'pvp', url: '/home/bg/bg_4_pve.jpg' },
        { id: 'pve', url: '/home/bg/bg_4_pvp.jpg' },
    ]
    // const bgMove = (index: any) => {
    //     setNowBgNum(index)
    // }
    // const framItemHandel = (val: any) => {
    //     setSelect(val.id)
    // }
    const swiperMove =(val:any) =>{
        setNowswiperNum(val)
    }
    // const select = useSilder(framList.length,3000)
    // useEffect(() =>{
    //     console.log(select);
    // },[select])

    return (
        <PageContain>
            <BgContain>
                
                    {swiperNum === 0&& <img src="/home/bg/bg_4_farm.jpg" alt="" />}
                    {swiperNum === 1&& <img src="/home/bg/bg_4_pve.jpg" alt="" />} 
                    {swiperNum === 2&& <img src="/home/bg/bg_4_pvp.jpg" alt="" />}
          
            </BgContain>
            <MainContain>

                <div className="mainLeft">
                    <div className="leftContain">
                       {swiperNum === 0&& <img src="/home/other/farm.jpg" alt="" />}
                       {swiperNum === 1&& <img src="/home/other/pve.png" alt="" />} 
                       {swiperNum === 2&& <img src="/home/other/pvp.png" alt="" />}
                        <div className="framBorder"></div>
                    </div>
                </div>
                <div className="mainRight">
                    <div className="rightContain">
                    <Swiper
                            autoplay={{
                                delay: 3000, // 默认延迟3s播放下一张
                                stopOnLastSlide: false, // 播放到最后一张时停止：否
                                disableOnInteraction: false // 用户操作轮播图后停止 ：是
                            }}
                            loop
                            // navigation={true}
                            centeredSlides={true}
                            direction={"vertical"}
                            className="swiper-fram"
                            spaceBetween={50}
                            slidesPerView={3}
                            slideToClickedSlide={true}
                            onSwiper={(swiper: any) =>{
                                // console.log(swiper)
                            }}
                            onSlideChange={(swiper: any) =>{
                                swiperMove(swiper.realIndex)
                                // console.log('slide change')
                            }}
                        >
                            {framList.map((item:any,index:number) => (
                                <SwiperSlide key={item.id} >
                                   < div key={item.id}>
                                            <div className={index !== swiperNum ? 'framItem' : 'framItemActive'}>
                                                <div className="itemMain">
                                                    <div className="framname">{item.name}</div>
                                                    <div className="framicon"><img src={item.icon} alt="" /></div>
                                                </div>
                                            </div>
                                            {index === swiperNum && (
                                                <div className="framNotes">
                                                    <div className="notesContain">{item.notes}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                </SwiperSlide >
                            ))}
                        </Swiper>
                    </div>
                    <div><img src="/home/other/line.png" alt="" /></div>
                </div>
            </MainContain>
        </PageContain>
    )
}
export default Fram