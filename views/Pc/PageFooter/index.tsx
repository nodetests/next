/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from "styled-components"
// import Image from 'next/image'

export const PageContain = styled.div`
    width: 100%     ;
    height:100vh;
    display: flex;
    justify-content: center;
	color: #ffffff;
    background-image: url('home/bg/bg_7.jpg');
    background-size:100% 100%;
    @media screen and (min-width: 1920px) {
        width:100%
    }
    @media screen and (max-width: 1220px) {
        width:1220px
    }
`
export const MainContain = styled.div`
    width: 1600px;
    height:100vh;
	color: #ffffff;
`
export const Header = styled.div`
    width: 1520px;
    height:30vh;
    font-size: 90px;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-top: 150px;
    @media screen and (min-width: 2000px) {
        padding-top: 250px;
    }
    div{
        width: 1520px;
        background: -webkit-linear-gradient(left,#accbee,#e7f0fd);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-size:100% 100%;
        text-align: center;
    }
`
export const Content = styled.div`
    width: 1520px;
    height:40vh;
    display: flex;
    flex-wrap: wrap;
    padding-top: 90px;
    @media screen and (min-width: 2000px) {
        padding-top: 180px;
    }
    .partnersItem{
        width: 254px;
        height: 50px;
        padding: 20px;
        margin-left: 50px;
    }
`
export const Footer = styled.div`
    width: 1520px;
    height:30vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    .footerContent{
        position: absolute;
        bottom: 40px;
        width: 450px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (min-width: 2000px) {
            bottom: 60px;
        }
        .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .communityItem{
                margin-left: 8px;
            }
        }
    }
`
const footerPartnersList = [
    {id:'binanceNFT',url:'/home/partners/binanceNFT.png'},
    {id:'binance',url:'/home/partners/binance.png'},
    {id:'certik',url:'/home/partners/certik.png'},
    {id:'coinmarketcap',url:'/home/partners/coinmarketcap.png'},
    {id:'metamask',url:'/home/partners/metamask.png'},
    {id:'dappradar',url:'/home/partners/dappradar.png'},
    {id:'mdex',url:'/home/partners/mdex.png'},
    {id:'tokenpocket',url:'/home/partners/tokenpocket.png'},
    {id:'mathwallet',url:'/home/partners/mathwallet.png'},
    {id:'coingecko',url:'/home/partners/coingecko.png'},
    {id:'bnb',url:'/home/partners/bnb.png'},
    {id:'pancakeswap',url:'/home/partners/pancakeswap.png'},
    {id:'blocksync',url:'/home/partners/blocksync.png'},
    {id:'bitscale',url:'/home/partners/bitscale.png'},
    {id:'certik-logotype-h-w',url:'/home/partners/certik-logotype-h-w.png'},
]
const communityList = [
    {id:'facebook',url:'/home/community/facebook.png',open:''},
    {id:'twitter',url:'/home/community/twitter.png',open:''},
    {id:'discord',url:'/home/community/discord.png',open:''},
    {id:'telegram',url:'/home/community/telegram.png',open:''},
    {id:'medium',url:'/home/community/medium.png',open:''},
    {id:'youtube',url:'/home/community/youtube.png',open:''},
]

const pageFooter = (props:any) =>{
    const {intl} = props
    return (
        <PageContain>
            <MainContain>
                <Header>
                    <div>  Our Partners</div>
                </Header>
                <Content>
                    {footerPartnersList.map((item:any) =>(
                        <div key={item.id} className="partnersItem">
                            {/* <Image alt="" width={254} height={50} src={item.url}></Image> */}
                            <img src={item.url} alt="" style={{width:'254px',height:'50px'}} />
                        </div>
                    ))}
                </Content>
                <Footer>
                    <div className='footerContent'>
                        <div className='content'>
                            <div>COMMUNITY</div>
                            {communityList.map((item:any) =>(
                                <div key={item.id} className="communityItem">
                                    {/* <Image alt="" width={34} height={34} src={item.url}></Image> */}
                                    <img src={item.url} alt="" style={{width:'34px',height:'34px'}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Footer>
            </MainContain>
        </PageContain> 
    )
}

export default pageFooter