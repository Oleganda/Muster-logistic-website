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
                img='https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg'
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

      <UserInput onChange={handleChange} userInput={userInput} />
      <Results calculateDeliveryPrice={() => calculateDeliveryPrice(userInput)} />
      <Questions />
      <UpButton />
      <Footer />
    </Router>
  );
}

export default App;
