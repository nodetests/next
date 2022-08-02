/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
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
    padding: 20px 16px 0 16px;
`
export const MainTop = styled.div`
    width: 100%;
    .quality{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
      
        .qualityContent{
            width: 284px;
            height:100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
           
        }
        .starts{
            font-size: 30px;
        }
        .startsNote{
          
            .startsNoteLeft{
                font-size: 25px;
                opacity: 0.9;
            }
            .startsNoteRight{
                font-size: 15px;
                opacity: 0.8;
            }
        }
    }
    .startContain{
        width:100%;
        display: flex;
        justify-content:center;
        .starContent{
            width: 100%
        }
      
        .swiper-slide{
            height: 178px;
            opacity: 0.4;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                height: 120px;
            }
        }
        .swiper-slide-active {
            opacity: 1;
            z-index: 3;
            img{
                width: 250px;
                height: 150px;
            }
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
        /* .swiper-button-next,.swiper-button-prev{
            margin-top: -9px;
        } */
        .swiper-button-next::after,.swiper-button-prev::after {
            display: none;
        }
    }

`
export const MainBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .attributeContain{
        width: 100%;
    }
    .attributeNoteContent{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 21px;
        .attributeNote{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            div:nth-child(1){
                width: 40px;
                display: flex;
                align-items: center;
                font-size: 14px;
            }
            div:nth-child(2){
                font-size: 12px;
                margin-left:22px;
                display: flex;
                align-items: center;
                height:30px;
            }
        }
    }
    
    .attributeImgContain{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 19px;
        .imgContain{
            display: flex;
            justify-content: flex-start;
        }
        .attributeItem{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            justify-content: flex-start;
            margin-left: 28px;
            cursor: pointer;
            img{
                width: 40px;
                height: 40px;
            }
        }
        .attributeItem:nth-child(1){
            margin-left: 0;
        }
        .borderItem{
            position: absolute;
            top:0;
            left: 0;
            width: 40px;
            height: 40px;
            transform: rotate(45deg);
            border: 1px solid #fff;
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
const bgList = [
    { id: 'n', name: 'n', url: '/home/mobel/bg_3_n.jpg' },
    { id: 'r', name: 'r', url: '/home/mobel/bg_3_r.jpg' },
    { id: 'sr', name: 'sr', url: '/home/mobel/bg_3_sr.jpg' },
    { id: 'ssr', name: 'ssr', url: '/home/mobel/bg_3_ssr.jpg' },
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

const Starts = (props: any) => {
    const { intl } = props
    const [nowStartNum, setNowStartNum] = useState<number>(0)
    // 每秒执行一次 用于Attribute样式更改 useRef使用是为了解决定时器重复创建的问题 
    // 理由是useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变
    const [nowAttributeNum, setNowAttributeNum] = useState<number>(0)
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);

    const startMove = (index: any) => {
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
            <CommonContain>
                <LazyLoad style={{width:'100%',height:"100%"}}>
                    <BgContain>
                        <div className="bgItem" style={{ background: 'rgba(135,98,212)' }}>
                            {nowStartNum === 0 && <img src={bgList[0].url} alt="" />}
                            {nowStartNum === 1 && <img src={bgList[1].url} alt="" />}
                            {nowStartNum === 2 && <img src={bgList[2].url} alt="" />}
                            {nowStartNum === 3 && <img src={bgList[3].url} alt="" />}
                        </div>
                    </BgContain>
                    <MainContain>
                        <MainTop>
                            <div className="quality">
                                <div className='qualityContent'>
                                    <div className="starts">STARTS</div>
                                    <div className='startsNote'>
                                        {nowStartNum === 0 && (<span><span className='startsNoteLeft'>N</span> <span className='startsNoteRight'>68%</span></span>)}
                                        {nowStartNum === 1 && (<span><span className='startsNoteLeft'>R</span> <span className='startsNoteRight'>27%</span></span>)}
                                        {nowStartNum === 2 && (<span><span className='startsNoteLeft'>SR</span> <span className='startsNoteRight'>4.7%</span></span>)}
                                        {nowStartNum === 3 && (<span><span className='startsNoteLeft'>SSR</span> <span className='startsNoteRight'>0.3%</span></span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="startContain">
                                <div className='starContent'>
                                    <Swiper
                                        autoplay={{
                                            delay: 3000, // 默认延迟3s播放下一张
                                            stopOnLastSlide: false, // 播放到最后一张时停止：否
                                            disableOnInteraction: false // 用户操作轮播图后停止 ：是
                                        }}
                                        loop
                                        navigation={true}
                                        centeredSlides={true}
                                        className="swiper-start1"
                                        slidesPerView={3}
                                        slideToClickedSlide={true}
                                        onSwiper={(swiper: any) => {
                                            // console.log(swiper)
                                        }}
                                        effect={"coverflow"}
                                        grabCursor={true}
                                    
                                    coverflowEffect={{
                                            rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
                                            stretch: -30, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
                                            depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
                                            modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
                                            slideShadows: false //开启slide阴影。默认 true。
                                        }}
                                        onSlideChange={(swiper: any) => {
                                            startMove(swiper.realIndex)
                                            // console.log('slide change')
                                        }}
                                    >
                                        {/* swiper-container-3d swiper-container-coverflow */}
                                        {starList.map((item: any, index: number) => (
                                            <SwiperSlide key={item.id} >
                                                <img src={item.url} alt="" />
                                            </SwiperSlide >
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                        </MainTop>
                        <MainBottom>
                            <div className="attributeContain">
                                <div className='attributeNoteContent'>
                                    <div className='noteContain'>
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
                                    </div>
                                </div>

                                <div className="attributeImgContain">
                                    <div className='imgContain'>
                                        {attributeList.map((item, index: number) => (
                                            <div className="attributeItem" key={item.id} onClick={() => { attributeHandler(index) }}>
                                                <img src={item.url} alt="" />
                                                {nowAttributeNum === index && (
                                                    <div className="borderItem"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </MainBottom>
                    </MainContain>
                </LazyLoad>
            </CommonContain>
       
    )
}
export default Starts