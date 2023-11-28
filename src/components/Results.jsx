import { useLocation } from 'react-router-dom';
export default function Results({ calculateDeliveryPrice }) {
    const location = useLocation();

    const isCalcualor = location.pathname === '/about-us' || location.pathname === '/download' || location.pathname === '/admin';

    if (isCalcualor) {
        return null;
    }
    return (


        <div className="resultPrice">
            <p>Delivery Price: {calculateDeliveryPrice()} $</p>
        </div>



    );
}
