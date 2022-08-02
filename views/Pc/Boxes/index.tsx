/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
// import Image from 'next/image'
export const PageContain = styled.div`
    width: 100%;
    height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('home/bg/bg_5.jpg');
    background-size:100% 100%;
    @media screen and (min-width: 1920px) {
        width:100%;
        height: 100vh;
    }
    @media screen and (max-width: 1220px) {
        width:1220px;
        height: 100vh;
    }
`
export const MainContent = styled.div`
    width: 1600px;
    height: 100vh;
`;
export const Header = styled.div`
    width: 1600px;
    height: 35vh;
	font-size: 120px;
    color: #fff;
    display: flex;
    align-items: center;
    div{
        text-align: left;
    }
`
export const Content = styled.div`
    width: 1600px;
    height: 65vh;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    .left{
        width: 520px;
        z-index: 999;
    }
    .left span:nth-child(1){
        display: inline-block;
        font-size: 30px;
        line-height: 60px;
        white-space: nowrap;
    }

    .left span:nth-child(2){
        display: inline-block;
        font-size: 20px;
        margin-top: 120px;

    }
    .center{
        width: 580px;
        opacity: 0.8;
        /* margin-left: 120px; */
    }
    .right {
        width: 500px;
        height: 100%;
        position: relative;
        padding-left: 10px;
    }
    .rightContent{
        position: absolute;
        bottom: 126px;
    }
    .rightContent span:nth-child(1){
        display: inline-block;
        font-size: 48px;
        white-space: nowrap;
    }
    .rightContent .bottom{
        display: inline-block;
        font-size: 20px;
        margin-top: 38px;
        white-space: nowrap;
    }
`
const Boxes  =(props:any) =>{
    const {intl} = props
  
    const TabList = [
        {id:'Home',name:'Home' },
        {id:'PlayGame',name:'PlayGame' },
        {id:'MarkPlace',name:'MarkPlace' },
        {id:'WhitePages',name:'WhitePages' },
    ]
    return (
        <PageContain>
            <MainContent>
                <Header>
                    <div>{intl['boxesleftTitle']}</div>
                </Header>
                <Content>
                    <div className="left">
                        <span> {intl['boxesleft1']} <br />{intl['boxesleft2']}</span>
                        <span> {intl['boxesleft3']}</span>
                    </div>
                    <div className="center">
                        {/* <Image src="/home/other/box.png" alt="" width={585} height={619} /> */}
                        <img src="/home/other/box.png" alt="" style={{width:'585px',height:'619px'}} />
                    </div>
                    <div className="right">
                        <div className="rightContent">
                            <span>{intl['boxesrightTitle']}</span> <br />
                            <span className="bottom">{intl['boxesrightContent']}</span>
                        </div>
                    </div>
                </Content>
            </MainContent>
        </PageContain>
    )
}
export default Boxes