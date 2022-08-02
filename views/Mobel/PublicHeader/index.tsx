/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const TabList = [
    { id: 'Home', name: 'Home' },
    { id: 'PlayGame', name: 'PlayGame' },
    { id: 'MarkPlace', name: 'MarkPlace' },
    { id: 'WhitePages', name: 'WhitePages' },
]


export const CommonContain = styled.div`
    width: 100%;
    height: 40px;
    background: rgba(0,0,0,0.2);
    z-index: 999;
    color: #ffffff;
    font-size: 24px;
    position:fixed;
    top:0;
    padding: 0 16px;
    overflow: hidden;
    .mainContainer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .mainLeft{
        width: 80px;
        height: 40px;
        margin-top: 20px;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .mainRight{
        width: 80%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button{
            /* margin-right: 20px; */
            width: 51px;
            height: 25px;
            background-color: #9bd6ff;
            color: #fff;
            box-shadow: none;
            border: none;
        }
        button:active{
            opacity: 0.6;
        }
        .headerList{
            height: 100%;
            display: flex;
            align-items: center;
            img{
                width: 21px;
                height: 21px;
            }
        }
        .menu{
            position: relative;
        }
        .menuContet{
            width: 100px !important;
            position: absolute;
            top: 20px;
            right: -15px;
            width: 80px;
            background: rgba(0,0,0,0.4);
            z-index: 88888;
            font-size: 12px;
            .tabContent{
                text-align: center;
                color: rgba(255,255,255,0.8);
            }
            .tabItem{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 12px;
            }
            .tabItemActive{
                /* width: 25%; */
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: underline;
                margin-top: 6px;
            }
            .tabItem:hover{
                background: #bae7ff;
            }
            .tabItem:nth-child(1),.tabItemActive:nth-child(1){
                margin-top: 0;
            }
            .tabName{
                
            }
        }
    }
`
export const HeaderLanguage = styled.div`
    /* width: ; */
    height: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 999999999;
  
    .languageContent{
        cursor: pointer;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
      
        img{
            width: 24px;
            height: 24px;
            margin: 0 24px 0 24px;
        }
        .selectContent{
            width: 100px;
            position: absolute;
            top: 36px;
            right: -12px;
            font-size: 12px;
            background: rgba(0,0,0,0.4);
            margin-top: 4px;
            text-align: center;
        }
       
        .selectContent div{
            padding: 6px;
            color: rgba(255,255,255,0.8);
        }
    }   
    
`


const PublicHeader = (props: any) => {
    const { mTabvisiable, setMTabvisiable, languageVisiable, setLanguageVisiable, setNowLanguage } = props
    const [nowTab, setNowTab] = useState<string>('Home')
    const [languageText, setLanguageText] = useState<string>('中文')
    const openHandler = () => {
        setLanguageVisiable(!languageVisiable)
        setMTabvisiable(false)
    }
    const openItemHandler = (val: string) => {
        setNowLanguage(val)
        setLanguageVisiable(false)
        if (val === 'zn') {
            setLanguageText('中文')
        } else {
            setLanguageText('English')
        }
    }
    const menuVisiable = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setLanguageVisiable(false)
        setMTabvisiable(!mTabvisiable)
    }
    const publicHandeler =(e:any) =>{
        e.preventDefault()
        e.stopPropagation()
        setLanguageVisiable(false)
        setMTabvisiable(false)
    }
    return (
        <LazyLoad>
            <CommonContain>
                <div className='mainContainer' onClick={(e:any) =>publicHandeler(e)}>
                    <div className='mainLeft'>
                        <img src="/home/other/logo.png" alt="" />
                    </div>
                    <div className='mainRight'>
                        <button className='play'>Play</button>
                        <HeaderLanguage>
                            <div className="languageContent" onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                openHandler()
                            }}>
                                <img src="/home/partners/EN.png" alt="" />
                                {languageVisiable && (
                                    <div className="selectContent">
                                        <div onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            openItemHandler('us')

                                        }}>English</div>
                                        <div onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            openItemHandler('zn')
                                        }}>中文</div>
                                    </div>
                                )}

                            </div>
                        </HeaderLanguage>
                        <div onClick={(e: any) => { menuVisiable(e) }} className="headerList">
                            <img src="/home/partners/LIST.png" alt="" />
                        </div>
                        {mTabvisiable && (
                            <div className='menu'>
                                <div className='menuContet'>
                                    <div className="tabContent">
                                        {TabList.map((item: any) => (
                                            <div key={item.id} className={item.id === nowTab ? 'tabItemActive' : 'tabItem'} onClick={() => { setNowTab(item.id) }}>
                                                <div className='tabName' style={{ cursor: 'pointer' }}>   {item.name}</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </CommonContain>
        </LazyLoad>
    )
}
export default PublicHeader