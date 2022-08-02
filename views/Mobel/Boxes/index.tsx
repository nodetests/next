/* eslint-disable @next/next/no-img-element */
import { useRef } from "react"
import styled from "styled-components"
import LazyLoad from 'react-lazyload';

export const CommonContain = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    background-image: url('home/bg/bg_5.jpg');
    background-size: 100% 100%;
    overflow: hidden;
`
export const MainContain = styled.div`
    width: 100%;
    height: 100%;
    padding:0px 16px 0 16px;
`
export const Header = styled.div`
    width: 100%;
    height: 35%;
	font-size: 26px;
    color: #fff;
    display: flex;
    padding-top: 40px;
    align-items: center;
    padding: 0 16px;
    div{
        text-align: left;
    }
`
export const Content = styled.div`
    width: 100%;
    height: 65%;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    padding: 0 16px;
    .left{
        .boxleft1{
            font-size: 14px;
        }
        .boxleft2{
            font-size: 12px;
            margin-top: 15px;
        }
        .boxleft3{
            width: 70%;
            position: absolute;
            font-size: 12px;
            margin-top: 12px;
            line-height: 20px;
            /* white-space: nowrap; */
            overflow: hidden;
        }
    }
    .right{
        img{
            width: 176px;
            height: 184px;
        }
    }
`
const Boxes = (props: any) => {

    const { intl } = props
    return (
        <CommonContain>
            <LazyLoad style={{ width: '100%', height: "100%" }}>
                <MainContain>
                    <Header>
                        <div>{intl['boxesleftTitle']}</div>
                    </Header>
                    <Content>
                        <div className="left">
                            <div className="boxleft1">
                                {intl['boxesrightTitle']}
                            </div>
                            <div className="boxleft2">
                                {intl['boxesrightContent']}
                            </div>
                            <div className="boxleft3">
                                {intl['boxesleft1']} <br />{intl['boxesleft2']}
                            </div>
                        </div>
                        <div className="right">
                            {/* <Image src="/home/other/box.png" alt="" width={585} height={619} /> */}
                            <img src="/home/other/box.png" alt="" />

                        </div>

                    </Content>
                </MainContain>
            </LazyLoad>
        </CommonContain>
    )
}
export default Boxes