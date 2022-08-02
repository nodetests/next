/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
// import Image from 'next/image'
export const PageContain = styled.div`
    width: 100%;
    height: 100vh;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
    display: flex;
    justify-content: center;
    background-image: url('home/bg/bg_6.jpg');
    background-size:100% 100%;
    @media screen and (min-width: 1920px) {
        width:100%
    }
    @media screen and (max-width: 1220px) {
        width:1220px
    }
`

export const MainContent = styled.div`
    width: 1600px;

`

export const Header = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    div{
        font-size: 170px;
    }
`
export const Content = styled.div`
    width: 1600px;
    height: 70vh;
    display: flex;
    align-items: center;
    position: relative;
    .lineContent{
        width: 300px;
        height: 65vh;
      
     .itemContent{
         display: flex;
         justify-content: flex-start;
         position: absolute;
         bottom: 0;
        padding-left: 56px;
         .item{
            position: relative;
             span{
                 display: block !important;
             }
             img{
                position: absolute;
                top: -110px;
                left: -56px;
                /* display: inherit; */
               
             }
            .line{
                display: flex;
                justify-content: center;
                .line1{
                    width: 2px;
                    height: 329px;
                    background:#fbfcff;
                }
                .line2{
                    width: 2px;
                    height: 393px;
                    background:#fbfcff;
                }
                .line3{
                    width: 2px;
                    height: 459px;
                    background:#fbfcff;
                }
                .line4{
                    width: 2px;
                    height: 527px;
                    background:#fbfcff;
                }
                .line5{
                    width: 2px;
                    height: 591px;
                    background:#fbfcff;
                }
            }  
         }
         .text{
             position: absolute;
             width: 231px;
             left: 114px;
             bottom: 78px; 
         }
         .text div:nth-child(1){
           font-size: 36px;
         }
         .text div:nth-child(n+2){
            font-size: 18px;
         }
         .text2{
            position: absolute;
            bottom: 136px; 
         }
         .text3{
            position: absolute;
            bottom: 165px; 
         }
         .text4{
            position: absolute;
            bottom: 244px; 
         }
         .text5{
            position: absolute;
            bottom: 331px; 
         }
      
     }   
    }
`

const RoadMap = (props:any) => {
    const {intl} = props
    const TabList = [
        { id: 'Home', name: 'Home' },
        { id: 'PlayGame', name: 'PlayGame' },
        { id: 'MarkPlace', name: 'MarkPlace' },
        { id: 'WhitePages', name: 'WhitePages' },
    ]
    return (
        <PageContain>
            <MainContent>
                <Header><div>Road Map</div></Header>
                <Content>
                    <div className="lineContent">
                        <div className="itemContent">
                            <div className="item">
                                {/* <Image width={114} height={114} alt="" src="/home/other/map_1.png"></Image> */}
                                <img src='/home/other/map_1.png' alt="" style={{width:'114px',height:'114px'}} />
                                <div className="line">
                                    <div className="line1"></div>
                                </div>
                            </div>
                            <div className="text">
                                <div>Q1 2021</div>
                                <div>{intl['roadMapq1_1']}</div>
                                <div>{intl['roadMapq1_2']}</div>
                                <div>{intl['roadMapq1_3']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="lineContent">
                        <div className="itemContent">
                            <div className="item">
                                {/* <Image width={114} height={114} alt="" src="/home/other/map_1.png"></Image> */}
                                <img src='/home/other/map_1.png' alt="" style={{width:'114px',height:'114px'}} />
                                <div className="line">
                                    <div className="line2"></div>
                                </div>
                            </div>
                            <div className="text text2">
                                <div>Q2 2021</div>
                                <div>{intl['roadMapq2_1']}</div>
                                <div>{intl['roadMapq2_2']}</div>
                                <div>{intl['roadMapq2_3']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="lineContent">
                        <div className="itemContent">
                            <div className="item">
                                {/* <Image width={114} height={114} alt="" src="/home/other/map_1.png"></Image> */}
                                <img src='/home/other/map_1.png' alt="" style={{width:'114px',height:'114px'}} />
                                <div className="line">
                                    <div className="line3"></div>
                                </div>
                            </div>
                            <div className="text text3">
                                <div>Q3 2022</div>
                                <div>{intl['roadMapq3_1']}</div>
                                <div>{intl['roadMapq3_2']}</div>
                                <div>{intl['roadMapq3_3']}</div>
                                <div>{intl['roadMapq3_4']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="lineContent">
                        <div className="itemContent">
                            <div className="item">
                                {/* <Image width={114} height={114} alt="" src="/home/other/map_1.png"></Image> */}
                                <img src='/home/other/map_1.png' alt="" style={{width:'114px',height:'114px'}} />
                                <div className="line">
                                    <div className="line4"></div>
                                </div>
                            </div>
                            <div className="text text4">
                                <div>Q4 2022</div>
                                <div>{intl['roadMapq4_1']}</div>
                                <div>{intl['roadMapq4_2']}</div>
                                <div>{intl['roadMapq4_3']}</div>
                                <div>{intl['roadMapq4_4']}</div>
                            </div>
                        </div>
                    </div>
                    <div className="lineContent">
                        <div className="itemContent">
                            <div className="item">
                                {/* <Image width={114} height={114} alt="" src="/home/other/map_1.png"></Image> */}
                                <img src='/home/other/map_1.png' alt="" style={{width:'114px',height:'114px'}} />
                                <div className="line">
                                    <div className="line5"></div>
                                </div>
                            </div>
                            <div className="text text5">
                                <div>Q5 2022</div>
                                <div>{intl['roadMapq5_1']}</div>
                                <div>{intl['roadMapq5_2']}</div>
                                <div>{intl['roadMapq5_3']}</div>
                                <div>{intl['roadMapq5_4']}</div>
                            </div>
                        </div>
                    </div>
                </Content>
            </MainContent>
        </PageContain>
    )
}
export default RoadMap