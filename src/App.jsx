import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutUs from './components/AboutUs.jsx';
import CustomNavbar from './components/Navbar.jsx';
import MainBanner from './components/Banner.jsx';
import Header from './components/Header.jsx';
import Services from './components/Services.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import Questions from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import calculateDeliveryPrice from './util/calcualate-price.js';
import Download from './components/DownloadFiles.jsx';
import UpButton from './components/UpButton.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    containerQuantity: 1,
    grossWeight: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <Router>
      <CustomNavbar />
      <MainBanner />

      <Routes>

        <Route
          path='/about-us'
          element={<>
            <Header title='About Us' />
            <AboutUs
              img='https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg'
              text='Our dedicated team of professionals is committed to ensuring seamless and efficient logistics services tailored to meet the unique needs of our clients. With a focus on reliability and innovation, we leverage cutting-edge technology to optimize routes, reduce delivery times, and enhance overall supply chain performance. As a trusted partner in the logistics industry, we prioritize sustainability, implementing eco-friendly practices to reduce our carbon footprint and contribute to a greener future. Customer satisfaction is at the core of our values, and we strive to build lasting partnerships by providing personalized, cost-effective, and timely logistics solutions.'
            />
          </>}
        />

        <Route
          path='/download'
          element={<>
            <Header title='Drop your file' />
            <Download />
          </>
          } />

      </Routes>

      <Header title='Our Services' />
      <Services

        servicesData={[
          {
            img: 'https://cdn.pixabay.com/photo/2018/12/05/12/06/container-3857611_1280.jpg',
            title: 'Order picking',
            text: 'When a shipping order comes in, we assemble the products from the warehouse. Naturally, this process is not the same for large, bulky objects as for small products with high unit numbers. Every product takes the most efficient route to the order picking station.',
          },

          {
            img: 'https://cdn.pixabay.com/photo/2018/05/11/23/45/highway-3392100_1280.jpg',
            title: 'Pick-up service',
            text: 'We don’t just ship goods for you; we can also pick them up – internationally. We organise the price-effective collection of your products or resources from your suppliers nationally and abroad. You can absolutely trust us and our partners, we have may years of experience',
          },
          {
            img: 'https://cdn.pixabay.com/photo/2017/08/24/16/07/truck-2677373_1280.jpg',
            title: 'Transport and shipment',
            text: 'Your products should reach their intended recipient quickly, cheaply and safely. We select the best parcel delivery service or the most fitting shipping company for you and only release your products into the competent hands of our carefully chosen collaborating partners.',
          },
        ]} />


      <Header title='Calculate your Order' />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results calculateDeliveryPrice={() => calculateDeliveryPrice(userInput)} />


      <Header title='FAQ' />
      <Questions />

      <UpButton />
      <Footer />

    </Router>
  );
}

export default App;
