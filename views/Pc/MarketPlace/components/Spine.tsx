/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
// const heroModalUrl = 'http://10.252.0.94:9999/img/webspine' 
const heroModalUrl = 'https://dweb.link/ipfs/bafybeibggx4sj7zadv2cw7hwarex4ywse4fveam3phgyqvfxik5ms5q4aa/webspine'
interface heroSpin {
    heroModelName: string
}
const Spine = (props: heroSpin) => {
    const [num,setNum ] = useState<number>(0)
    const { heroModelName } = props
    // let cache:any =''
    // if(localStorage.getItem('heroModelName')){
    //     cache = localStorage.getItem('heroModelName')
    // }else{
    //     localStorage.setItem('heroModelName',heroModelName)
    // }
    useEffect(() => {
        if (heroModelName) {
            const jsonUrl = `${heroModalUrl}/${heroModelName}.json`;
            const atlasUrl = `${heroModalUrl}/${heroModelName}.atlas`;
            import('@esotericsoftware/spine-player').then((res: any) => {
                    new  res.SpinePlayer('player-container', {
                    jsonUrl: jsonUrl,
                    atlasUrl: atlasUrl,
                    animation: "daiji",
                    // animations: ["aida"],
                    premultipliedAlpha: false,
                    // backgroundColor: '#1e2749',
                    alpha: true,
                    backgroundColor: "#00000000",
                    // viewport: {
                    //     debugRender: false,
                    // },
                    skin: heroModelName === 'hero_yuhongyi' || heroModelName === 'hero_suqianru' ? 'skin_01' : 'default',
                    showControls: false,
                    // debug: {
                    //     bones: true, 
                    //     regions: true,
                    //     meshes: true,
                    //     bounds: true,
                    //     paths: true,
                    //     clipping: true,
                    //     points: true,
                    //     hulls: true
                    //  }
                    preserveDrawingBuffer: true,
                })
            })
            
            // let arr:any = document.getElementById('player-container')
            // console.log(arr);
            // if(arr.length >1){
            //     arr.map((item:any) =>{
            //         console.log(item.key);
                    
            //     })
               
            // }
            // document.removeChild()
            
        }
    }, [heroModelName])



    return (
        heroModelName?(
            <div style={{ overflow: 'hidden', height:'600px',width:'600px' }} key={heroModelName || ''} id="player-container" > </div>
        ):(
            <div style={{ overflow: 'hidden', height:'600px',width:'600px' }}></div>
        )
     )
}

export default React.memo(Spine)


