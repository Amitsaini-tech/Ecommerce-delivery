import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Pricing from './dropDownMenus/Pricing';
import Login from './Login/Login';
import Footer from './components/Footer';

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
import TrackOrder from './pages/TrackOrder';
import GenerateShipment from './pages/GenerateShipment';

// ── Layout: renders Footer below every non-home page ──────────────
const PageLayout = ({ children }) => (
    <div className="flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
    </div>
);

const App = () => {
    return (
        <div className="w-screen h-full flex flex-col">
            <Header/>
            <main className="mt-8 md:mt-12 lg:mt-14 w-full">
            <Routes>
                {/* Home — MainContainer already has Footer */}
                <Route path="/" element={<MainContainer/>}/>

                {/* Login — full-screen, no Footer */}
                <Route path="/Login" element={<Login/>}/>

                {/* All other pages — Footer via PageLayout */}
                <Route path="/Pricing" element={<PageLayout><Pricing/></PageLayout>}/>
                <Route path="/track-order" element={<PageLayout><TrackOrder/></PageLayout>}/>
                <Route path="/generate-shipment" element={<PageLayout><GenerateShipment/></PageLayout>}/>

                {/* Platform features */}
                <Route path="/features/cash-on-delivery" element={<PageLayout><CashOnDelivery/></PageLayout>}/>
                <Route path="/features/serviceable-pincodes" element={<PageLayout><ServiceablePincodes/></PageLayout>}/>
                <Route path="/features/api-integration" element={<PageLayout><ApiIntegration/></PageLayout>}/>
                <Route path="/features/multiple-pickup-location" element={<PageLayout><MultiplePickupLocation/></PageLayout>}/>
                <Route path="/features/print-shipping-label" element={<PageLayout><PrintShippingLabel/></PageLayout>}/>
                <Route path="/features/email-sms-notifications" element={<PageLayout><EmailSmsNotifications/></PageLayout>}/>
                <Route path="/features/amazon-self-ship" element={<PageLayout><AmazonSelfShip/></PageLayout>}/>

                {/* Partners */}
                <Route path="/partners/carrier" element={<PageLayout><Carrier/></PageLayout>}/>
                <Route path="/partners/technology" element={<PageLayout><Technology/></PageLayout>}/>

                {/* Products */}
                <Route path="/products/ecommerce-shipping" element={<PageLayout><EcommerceShipping/></PageLayout>}/>
                <Route path="/products/b2b-shipping" element={<PageLayout><B2BShipping/></PageLayout>}/>
                <Route path="/products/hyperlocal" element={<PageLayout><Hyperlocal/></PageLayout>}/>
                <Route path="/products/intercity-delivery" element={<PageLayout><IntercityDelivery/></PageLayout>}/>
                <Route path="/products/warehouse" element={<PageLayout><Warehouse/></PageLayout>}/>
                <Route path="/products/express-delivery" element={<PageLayout><ExpressDelivery/></PageLayout>}/>
                <Route path="/products/omnichannel" element={<PageLayout><Omnichannel/></PageLayout>}/>
                <Route path="/products/postship" element={<PageLayout><Postship/></PageLayout>}/>
                <Route path="/products/returns" element={<PageLayout><Returns/></PageLayout>}/>
                <Route path="/products/tracking" element={<PageLayout><Tracking/></PageLayout>}/>
                <Route path="/products/trends" element={<PageLayout><Trends/></PageLayout>}/>

                {/* Resources */}
                <Route path="/resources/shipping-rate-calculator" element={<PageLayout><ShippingRateCalculator/></PageLayout>}/>
                <Route path="/resources/volumetric-weight-calculator" element={<PageLayout><VolumetricWeightCalculator/></PageLayout>}/>
                <Route path="/resources/knowledge-base" element={<PageLayout><KnowledgeBase/></PageLayout>}/>
                <Route path="/resources/faqs" element={<PageLayout><FAQs/></PageLayout>}/>
                <Route path="/resources/developers" element={<PageLayout><Developers/></PageLayout>}/>
                <Route path="/resources/blog" element={<PageLayout><Blog/></PageLayout>}/>
                <Route path="/resources/ebook" element={<PageLayout><Ebook/></PageLayout>}/>
                <Route path="/resources/encyclopedia" element={<PageLayout><Encyclopedia/></PageLayout>}/>
                <Route path="/resources/video-podcast" element={<PageLayout><VideoAndPodcast/></PageLayout>}/>
                <Route path="/resources/india-d2c-report" element={<PageLayout><IndiaD2CReport/></PageLayout>}/>
                <Route path="/resources/customer-stories" element={<PageLayout><CustomerStories/></PageLayout>}/>
            </Routes>
            </main>
        </div>
    )
}

export default App;