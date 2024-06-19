import React from 'react'
import "./MarqueeCss.css";
// import  styled, {keyframes } from "styled-components";

const Marquee = () => {
    const rows1 = [
        "https://www.shahi.co.in/wp-content/uploads/2022/04/shahi-logo.png",
        "https://www.jaquar.com/Themes/Jaquar2022/Content/images/logo.svg",
        "https://www.roca.in/documents/20126/100677/logo-roca-cabecera.png/bee21b45-75ab-d941-9eb6-28dc00ec9ca3?t=1557847646888",
        "https://static.wixstatic.com/media/74f8f3_8e8dda4cfc90407c8838177ee08a356e~mv2.jpeg/v1/fill/w_96,h_99,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/74f8f3_8e8dda4cfc90407c8838177ee08a356e~mv2.jpeg",
        "https://www.safariltd.com/cdn/shop/files/Safari_ltd_Logo_300x100_1_300x100.png?v=1613688328",
        "https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg",
        "https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=webp&fit=scale",
        "https://beardo.in/cdn/shop/files/beardo_logo_white_png_1.png?v=1679998281&width=500",
        "https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599",
        "https://www.themancompany.com/cdn/shop/files/logo_08a2688e-7c47-4081-a0e8-942d40f74a6d_250x.png?v=1663137227",

        "https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg",

    ]
    const rows2 = [
        "https://thegodspeedclothing.com/cdn/shop/files/logoooo_en_black_450x.jpg?v=1614288957",
        "https://about.puma.com/themes/custom/dreist/src/assets/images/logo_puma-cat-dark.svg",
        "https://mcprod.asics.com/logo-rxE.svg",
        "https://cdn11.bigcommerce.com/s-x6b2pdd9ey/images/stencil/111x100/runbird_1_1702577471__00780.original.png",
        "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg",
        "https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg",
        "https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=webp&fit=scale",
        "https://beardo.in/cdn/shop/files/beardo_logo_white_png_1.png?v=1679998281&width=500",
        "https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599",
        "https://www.themancompany.com/cdn/shop/files/logo_08a2688e-7c47-4081-a0e8-942d40f74a6d_250x.png?v=1663137227",

        "https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg",
    ]

    return (
        <div className='wrap' >
            <div className='wrapper'>
                <div className='marquee'>
                    <span className='marqueeGroup'>
                        {
                            rows1.map(el => (
                                <div className='imageGroup'>
                                    <img src={el} alt="" className='img' /></div>

                            ))
                        }
                        {
                            rows2.map(el => (
                                <div className='imageGroup'>
                                    <img src={el} alt="" className='img' /></div>

                            ))
                        }
                        {
                            rows1.map(el => (
                                <div className='imageGroup'>
                                    <img src={el} alt="" className='img' /></div>

                            ))
                        }
                        {
                            rows2.map(el => (
                                <div className='imageGroup'>
                                    <img src={el} alt="" className='img' /></div>

                            ))
                        }
                        
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Marquee

// const Scrollx= keyframes`
// from{
//     left: translate(0);
// }
// to{
//     transform: translateX(-100%);
// }
// `
