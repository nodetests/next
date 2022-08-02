
import styled from 'styled-components'
// pc端
import PublicHeader from './Pc/components/publicHeader'
import PageHeader from './Pc/PageHeader'
import MarketPlace from './Pc/MarketPlace'
import Stats from './Pc/Starts'
import Fram from './Pc/Fram/index';
import Boxes from './Pc/Boxes/index';
import RoadMap from './Pc/RoadMap/index';
import PageFooter from './Pc/PageFooter'
import { useEffect, useState } from 'react'
import { znlanguageList } from './local/zn'
import { uslanguageList } from './local/us'
import { FullPage, Slide } from 'react-full-page';
// 移动端
import MPublicHeader from './Mobel/PublicHeader'
import MPageHeader from './Mobel/PageHeader'
import MMarketPlace from './Mobel/MarketPlace'
import MStarts from './Mobel/Starts'
import MFram from './Mobel/Fram'
import MBoxes from './Mobel/Boxes'
import MRoadMap from './Mobel/RoadMap'
import MPageFooter from './Mobel/PageFooter'
export const PcMainContain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    @media screen and(max-width:1200px)  {
        width: 1200px;
    }
`
export const MobelMainContain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    .mPublicHeader{
        position: fixed;
        width: 100%;
        height: 40px;
        z-index: 999;
    }
    .mContainer{
        width: 100%;
        height: 100%;
    }
`
const Home = (props: any) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [languageVisiable, setLanguageVisiable] = useState<boolean>(false)
    const [nowLanguage, setNowLanguage] = useState<string>('zn')
    const [mTabvisiable, setMTabvisiable] = useState<boolean>(false)
    const [intl, setIntl] = useState<any>('')
    const scrollChange = () => {
        // console.log(document.body.scrollLeft,document.documentElement.scrollLeft);
        let sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
        setScreenWidth(sl)
    }
    const languangeHandler = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setLanguageVisiable(false)
        setMTabvisiable(false)
    }
    // //页面首次进入先设置当前宽度加判断 
    const resizeUpdate = (e: any) => {
        // 通过事件对象获取浏览器窗口的高度
        let w = e.target.clientWidth || document.documentElement.clientWidth;
        setWindowWidth(w);
    };
      //页面首次进入先设置当前宽度加判断 
    useEffect(() => {
        let w = document.documentElement.clientWidth;;
        setWindowWidth(w)
        // 页面变化时获取浏览器窗口的大小 
        window.addEventListener('resize', resizeUpdate);
        return () => {
        // 组件销毁时移除监听事件
        window.removeEventListener('resize', resizeUpdate);
        }
    }, [])
    //页面首次进入先设置当前宽度加判断 
    useEffect(() => {
        window.addEventListener('scroll', scrollChange, true)
        setScreenWidth(window.pageXOffset)
        return () => {
            window.removeEventListener('scroll', scrollChange, false)
        }
    }, [])

    useEffect(() => {
        if (nowLanguage === 'us') {
            setIntl(uslanguageList)
        } else {
            setIntl(znlanguageList)
        }
    }, [nowLanguage])
    // console.log(windowWidth)
    return (
        intl &&
        windowWidth>750 ?
        <PcMainContain>
            <div className='mainContent' onClick={(e) => { languangeHandler(e) }}>
                <PublicHeader
                    languageVisiable={languageVisiable}
                    setLanguageVisiable={setLanguageVisiable}
                    screenWidth={screenWidth}
                    nowLanguage={nowLanguage}
                    setNowLanguage={setNowLanguage}
                    windowWidth={windowWidth}
                />
                <FullPage controls={false}>
                    <Slide>
                        <PageHeader intl={intl} windowWidth={windowWidth} />
                    </Slide>
                    <Slide>
                        <MarketPlace intl={intl} windowWidth={windowWidth} />
                    </Slide>
                    <Slide>
                        <Stats intl={intl}  windowWidth={windowWidth}/>
                    </Slide>
                    <Slide>
                        <Fram intl={intl} windowWidth={windowWidth}/>
                    </Slide>
                    <Slide>
                        <Boxes intl={intl} windowWidth={windowWidth}/>
                    </Slide>
                    <Slide>
                        <RoadMap intl={intl} windowWidth={windowWidth}/>
                    </Slide>
                    <Slide>
                        <PageFooter intl={intl} windowWidth={windowWidth} />
                    </Slide>
                </FullPage>
            </div>
        </PcMainContain>
        :<MobelMainContain>
            <div className='mPublicHeader'  style={{width:'100%'}} >
                <MPublicHeader 
                    mTabvisiable={mTabvisiable} 
                    setMTabvisiable={setMTabvisiable}
                    languageVisiable={languageVisiable}
                    setLanguageVisiable={setLanguageVisiable}
                    nowLanguage={nowLanguage}
                    setNowLanguage={setNowLanguage}
                    ></MPublicHeader>
            </div>
           
            <div className='mContainer' onClick={(e) => { languangeHandler(e) }}>
                <div className='section' style={{width:'100%',height:`${375}px`}}> <MPageHeader intl={intl}></MPageHeader></div>
                <div className='section' style={{width:'100%',height:`${365}px`}}><MMarketPlace intl={intl}></MMarketPlace></div>
                <div className='section' style={{width:'100%',height:`${381}px`}}><MStarts intl={intl}></MStarts></div>
                <div className='section' style={{width:'100%',height:`${339}px`}}><MFram intl={intl}></MFram></div>
                <div className='section' style={{width:'100%',height:`${302}px`}}><MBoxes intl={intl}></MBoxes></div>
                <div className='section' style={{width:'100%',height:`${228}px`}}><MRoadMap intl={intl}></MRoadMap></div>
                <div className='section' style={{width:'100%',height:`${294}px`}}><MPageFooter intl={intl}></MPageFooter></div>
            </div>
        </MobelMainContain>
    )
}
export default Home
