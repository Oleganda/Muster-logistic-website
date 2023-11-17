
export default function Results({ calculateDeliveryPrice }) {
    return (

        <div className="resultPrice">
            <p>Delivery Price: {calculateDeliveryPrice()} $</p>
        </div>



    );
}
