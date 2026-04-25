import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Pricing from './dropDownMenus/Pricing';
import Login from './Login/Login';

// Platform feature pages
import CashOnDelivery from './pages/CashOnDelivery';
import ServiceablePincodes from './pages/ServiceablePincodes';
import ApiIntegration from './pages/ApiIntegration';
import MultiplePickupLocation from './pages/MultiplePickupLocation';
import PrintShippingLabel from './pages/PrintShippingLabel';
import EmailSmsNotifications from './pages/EmailSmsNotifications';
import AmazonSelfShip from './pages/AmazonSelfShip';

// Partner pages
import Carrier from './pages/Carrier';
import Technology from './pages/Technology';

// Products pages
import EcommerceShipping from './pages/EcommerceShipping';
import B2BShipping from './pages/B2BShipping';
import Hyperlocal from './pages/Hyperlocal';
import IntercityDelivery from './pages/IntercityDelivery';
import Warehouse from './pages/Warehouse';
import ExpressDelivery from './pages/ExpressDelivery';
import Omnichannel from './pages/Omnichannel';
import Postship from './pages/Postship';
import Returns from './pages/Returns';
import Tracking from './pages/Tracking';
import Trends from './pages/Trends';

// Resources pages
import ShippingRateCalculator from './pages/ShippingRateCalculator';
import VolumetricWeightCalculator from './pages/VolumetricWeightCalculator';
import KnowledgeBase from './pages/KnowledgeBase';
import FAQs from './pages/FAQs';
import Developers from './pages/Developers';
import Blog from './pages/Blog';
import Ebook from './pages/Ebook';
import Encyclopedia from './pages/Encyclopedia';
import VideoAndPodcast from './pages/VideoAndPodcast';
import IndiaD2CReport from './pages/IndiaD2CReport';
import CustomerStories from './pages/CustomerStories';

const App = () => {
    return (
        <div className="w-screen h-full flex flex-col">
            <Header/>
            <main className=" mt-8 md:mt-12 lg:mt-14 w-full">
            <Routes>
                <Route path="/Pricing" element ={<Pricing/>}/>
                <Route path="/Login" element ={<Login/>}/>
                <Route path="/" element ={<MainContainer/>}/>

                {/* Platform features */}
                <Route path="/features/cash-on-delivery" element={<CashOnDelivery/>}/>
                <Route path="/features/serviceable-pincodes" element={<ServiceablePincodes/>}/>
                <Route path="/features/api-integration" element={<ApiIntegration/>}/>
                <Route path="/features/multiple-pickup-location" element={<MultiplePickupLocation/>}/>
                <Route path="/features/print-shipping-label" element={<PrintShippingLabel/>}/>
                <Route path="/features/email-sms-notifications" element={<EmailSmsNotifications/>}/>
                <Route path="/features/amazon-self-ship" element={<AmazonSelfShip/>}/>

                {/* Partners */}
                <Route path="/partners/carrier" element={<Carrier/>}/>
                <Route path="/partners/technology" element={<Technology/>}/>

                {/* Products */}
                <Route path="/products/ecommerce-shipping" element={<EcommerceShipping/>}/>
                <Route path="/products/b2b-shipping" element={<B2BShipping/>}/>
                <Route path="/products/hyperlocal" element={<Hyperlocal/>}/>
                <Route path="/products/intercity-delivery" element={<IntercityDelivery/>}/>
                <Route path="/products/warehouse" element={<Warehouse/>}/>
                <Route path="/products/express-delivery" element={<ExpressDelivery/>}/>
                <Route path="/products/omnichannel" element={<Omnichannel/>}/>
                <Route path="/products/postship" element={<Postship/>}/>
                <Route path="/products/returns" element={<Returns/>}/>
                <Route path="/products/tracking" element={<Tracking/>}/>
                <Route path="/products/trends" element={<Trends/>}/>

                {/* Resources */}
                <Route path="/resources/shipping-rate-calculator" element={<ShippingRateCalculator/>}/>
                <Route path="/resources/volumetric-weight-calculator" element={<VolumetricWeightCalculator/>}/>
                <Route path="/resources/knowledge-base" element={<KnowledgeBase/>}/>
                <Route path="/resources/faqs" element={<FAQs/>}/>
                <Route path="/resources/developers" element={<Developers/>}/>
                <Route path="/resources/blog" element={<Blog/>}/>
                <Route path="/resources/ebook" element={<Ebook/>}/>
                <Route path="/resources/encyclopedia" element={<Encyclopedia/>}/>
                <Route path="/resources/video-podcast" element={<VideoAndPodcast/>}/>
                <Route path="/resources/india-d2c-report" element={<IndiaD2CReport/>}/>
                <Route path="/resources/customer-stories" element={<CustomerStories/>}/>
            </Routes>
            </main>
        </div>
    )
}

export default App;