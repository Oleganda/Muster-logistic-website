import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculateDeliveryPrice from './util/calculate-price';
import AboutUs from './components/AboutUs';
import CustomNavbar from './components/Navbar';
import MainBanner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';
import UserInput from './components/UserInput';
import Results from './components/Results';
import Questions from './components/Faq';
import Footer from './components/Footer';
import Download from './components/DownloadFiles';
import UpButton from './components/UpButton';
// import AdminPanel from './components/AdminPanel';
import Files from './components/Files';
import UpdateFile from './components/UpdateFile';

function App() {
  const [userInput, setUserInput] = useState({
    containerQuantity: 1,
    grossWeight: 10,
  });

  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  };

  const deleteFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });

  };

  const renameFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  return (
    <Router>
      <CustomNavbar />

      <Routes>
        <Route
          path='/home'
          element={
            <>
              <MainBanner />


            </>
          }
        />
        <Route
          path='/about-us'
          element={
            <>
              <Header title='About Us' />
              <AboutUs
                img='https://img.freepik.com/free-photo/delivery-men-loading-carboard-boxes-in-a-van-while-getting-ready-for-the-shipment_637285-2289.jpg?w=1480&t=st=1707897111~exp=1707897711~hmac=fbe51c5a4caf1de9288a7b5d9283df9fe810eacfbcfa8eb3576d62ac76953e6b'
                text='Our dedicated team of professionals is committed to ensuring seamless and efficient logistics services tailored to meet the unique needs of our clients. With a focus on reliability and innovation, we leverage cutting-edge technology to optimize routes, reduce delivery times, and enhance overall supply chain performance. As a trusted partner in the logistics industry, we prioritize sustainability, implementing eco-friendly practices to reduce our carbon footprint and contribute to a greener future. Customer satisfaction is at the core of our values, and we strive to build lasting partnerships by providing personalized, cost-effective, and timely logistics solutions.'
              />
            </>
          }
        />
        <Route path='/allfiles'
          element={<Files />}>


        </Route>

        <Route path='/update/:id'
          element={<UpdateFile />}>


        </Route>
        <Route
          path='/files/upload'
          element={
            <>
              <Header title='Upload your file' />
              <Download
                description='Click to select multiple files or use drag-and-drop (.pdf or .docx)'
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                deleteFile={deleteFile}
                renameFile={renameFile}
              />
            </>
          }
        />

        <Route
          path='/admin'
          element={
            <>
              <Files />
            </>
          }
        />
        <Route
          path='/update'
          element={
            <>
              <UpdateFile />
            </>
          }
        />


      </Routes>

      <Services
        servicesData={[
          {
            img: 'https://img.freepik.com/free-photo/industrial-port-and-container-yard_1112-1202.jpg?w=1480&t=st=1707897161~exp=1707897761~hmac=7c66ffaa9175e92a227341139c3dfee9a3c2e8131976f83585c523e64be9ccf3',
            title: 'Order picking',
            text: 'When a shipping order comes in, we assemble the products from the warehouse. Naturally, this process is not the same for large, bulky objects as for small products with high unit numbers. Every product takes the most efficient route to the order picking station.',
          },

          {
            img: 'https://img.freepik.com/free-photo/workman-at-store-house-in-orange-helmet_1303-28088.jpg?w=1480&t=st=1707897182~exp=1707897782~hmac=7f53782dffaf7c072de0fc44f1a883a02b64a1bf7b55211146736a91b35e9803',
            title: 'Pick-up service',
            text: 'We don’t just ship goods for you; we can also pick them up – internationally. We organise the price-effective collection of your products or resources from your suppliers nationally and abroad. You can absolutely trust us and our partners, we have may years of experience',
          },
          {
            img: 'https://img.freepik.com/free-photo/a-large-warehouse-with-a-large-truck-in-the-middle-of-it_123827-23504.jpg?w=1480&t=st=1707897216~exp=1707897816~hmac=781cfff1b2d8c7538eeb4499bd124161710270368d9bc574dab422241ebd0070',
            title: 'Transport and shipment',
            text: 'Your products should reach their intended recipient quickly, cheaply and safely. We select the best parcel delivery service or the most fitting shipping company for you and only release your products into the competent hands of our carefully chosen collaborating partners.',
          },
        ]} />

      <UserInput onChange={handleChange} userInput={userInput} />
      <Results calculateDeliveryPrice={() => calculateDeliveryPrice(userInput)} />
      <Questions />
      <UpButton />
      <Footer />
    </Router>
  );
}

export default App;
