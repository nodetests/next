/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import Image from 'next/image'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,0.2);
    z-index: 999;
    color: #ffffff;
    font-size: 24px;
    position:fixed;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1920px) {
        width:100%
    }
    @media screen and (max-width: 1220px) {
        width:1220px
    }
`

export const Content = styled.div`
    width: 100%;
    height: 80px;
    color: #ffffff;
    position:fixed;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    /* overflow-x: auto; */
    @media screen and (min-width: 1920px) {
        width:100%
    }

    @media screen and (max-width: 1220px) {
        width:1220px
    }
`

export const HeaderLogo = styled.div`
    width: 15%;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        max-width:100%;
        max-height:56px;
        margin-left: 52px;
    }
`

export const HeaderTab = styled.div`
    width: 70%;
    height: 80px;
    .tabContent{
        width:60%;
        height: 80px;
        display: flex;
        justify-content: flex-start;
    }
    .tabItem{
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabItemActive{
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;
    }
`

export const HeaderLanguage = styled.div`
    width: 15%;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 999999999;
    .languageContent{
        cursor: pointer;
        position: relative;
        img{
        margin-left: 8px;
        }
        .selectContent{
            position: absolute;
            width: 100%;
            border: 1px solid rgba(255,255,255,0.6);
            top: 36px;
            font-size: 20px;
        }
       
        .selectContent div{
            padding: 6px;
            color: rgba(255,255,255,0.8);
        }
    }   
    
`

const publicHeader = (props: any) => {

    const { screenWidth, languageVisiable, setLanguageVisiable, setNowLanguage } = props
    const [nowTab, setNowTab] = useState<string>('Home')
    const [languageText, setLanguageText] = useState<string>('中文')
    const TabList = [
        { id: 'Home', name: 'Home' },
        { id: 'PlayGame', name: 'PlayGame' },
        { id: 'MarkPlace', name: 'MarkPlace' },
        { id: 'WhitePages', name: 'WhitePages' },
    ]


    const openHandler = () => {
        setLanguageVisiable(true)
    }
    const openItemHandler = (val:string) => {
        setNowLanguage(val)
        setLanguageVisiable(false)
       if(val === 'zn'){
        setLanguageText('中文')
       }else{
        setLanguageText('English')
       }
    }
    useEffect(() => {
        let nodes: any = document.getElementById('publicHeader')
        nodes.style.left = screenWidth + 'px';
    }, [screenWidth])

    return (
        <Container id="publicHeader">
            <Content>
                <HeaderLogo>
                    {/* <Image width={157} height={47} src="/home/other/logo.png" alt="nft" /> */}
                    <img src="/home/other/logo.png" alt="" style={{ width: '157px', height: '47px' }} />
                </HeaderLogo>
                <HeaderTab>
                    <div className="tabContent">
                        {TabList.map((item: any) => (
                            <div key={item.id} className={item.id === nowTab ? 'tabItemActive' : 'tabItem'} onClick={() => { setNowTab(item.id) }}>
                                <span style={{ cursor: 'pointer' }}>   {item.name}</span>
                            </div>
                        ))}
                    </div>
                   
                </HeaderTab>
                <HeaderLanguage>
                    <div className="languageContent" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        openHandler()
                    }}>
                        <span> {languageText}</span>
                        <img src="/home/other/language.png" alt="" />
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
            </Content>
        </Container>
    )
}
export default publicHeader