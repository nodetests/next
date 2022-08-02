/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from "styled-components"
import LazyLoad from 'react-lazyload';

export const PageContain = styled.div`
    width: 100%     ;
    height:100%;
    display: flex;
    justify-content: center;
	color: #ffffff;
    background-image: url('home/mobel/bg_7.jpg');
    background-size:100% 100%;
    padding: 0 16px;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height:100%;
`
export const Header = styled.div`
    width: 100%;
    height: 25%;
    font-size: 26px;
    display: flex;
    justify-content: center;
    padding-top: 22px;
    div{
        width: 100%;
        background: -webkit-linear-gradient(left,#accbee,#e7f0fd);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-size:100% 100%;
        text-align: center;
    }
`
export const Content = styled.div`
    width: 100%;
    height:50%;
    display: flex;
    flex-wrap: wrap;
    .partnersItem{
        width: 33%;
        height: 24px;
        padding-left: 12px;
        margin-top:7px;
        img{
            width: 101px;
            height: 20px;
        }
    }
`
export const Footer = styled.div`
    width: 100%;
    height:25%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6px;
    .footerContent{
        position: absolute;
        bottom: 12px;
        width: 224px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .communityItem{
                margin-left: 4px;
                
                img{
                    width:17px;
                    height: 17px;
                }
            }
        }
    }
`
const footerPartnersList = [
    { id: 'binanceNFT', url: '/home/partners/binanceNFT.png' },
    { id: 'binance', url: '/home/partners/binance.png' },
    { id: 'certik', url: '/home/partners/certik.png' },
    { id: 'coinmarketcap', url: '/home/partners/coinmarketcap.png' },
    { id: 'metamask', url: '/home/partners/metamask.png' },
    { id: 'dappradar', url: '/home/partners/dappradar.png' },
    { id: 'mdex', url: '/home/partners/mdex.png' },
    { id: 'tokenpocket', url: '/home/partners/tokenpocket.png' },
    { id: 'mathwallet', url: '/home/partners/mathwallet.png' },
    { id: 'coingecko', url: '/home/partners/coingecko.png' },
    { id: 'bnb', url: '/home/partners/bnb.png' },
    { id: 'pancakeswap', url: '/home/partners/pancakeswap.png' },
    { id: 'blocksync', url: '/home/partners/blocksync.png' },
    { id: 'bitscale', url: '/home/partners/bitscale.png' },
    { id: 'certik-logotype-h-w', url: '/home/partners/certik-logotype-h-w.png' },
]
const communityList = [
    { id: 'facebook', url: '/home/community/facebook.png', open: '' },
    { id: 'twitter', url: '/home/community/twitter.png', open: '' },
    { id: 'discord', url: '/home/community/discord.png', open: '' },
    { id: 'telegram', url: '/home/community/telegram.png', open: '' },
    { id: 'medium', url: '/home/community/medium.png', open: '' },
    { id: 'youtube', url: '/home/community/youtube.png', open: '' },
]

const pageFooter = (props: any) => {

    const { intl } = props

    return (

        <PageContain>
            <LazyLoad style={{ width: '100%', height: "100%" }}>
                <MainContain>
                    <Header>
                        <div>  Our Partners</div>
                    </Header>
                    <Content>
                        {footerPartnersList.map((item: any) => (
                            <div key={item.id} className="partnersItem">
                                <img src={item.url} alt="" />
                            </div>
                        ))}
                    </Content>
                    <Footer>
                        <div className='footerContent'>
                            <div className='content'>
                                <div>COMMUNITY</div>
                                {communityList.map((item: any) => (
                                    <div key={item.id} className="communityItem">

                                        <img src={item.url} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Footer>
                </MainContain>
            </LazyLoad>
        </PageContain>

    )
}

export default pageFooter