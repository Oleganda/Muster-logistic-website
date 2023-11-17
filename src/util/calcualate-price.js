
const calculateDeliveryPrice = (userInput) => {
  const basePricePerContainer = 5;
  const weightMultiplier = 20;
  // const destinationMultiplier = {
  //   Hungary: 2,
  //   Germany: 1.5,
  // };

  const price =
    basePricePerContainer * userInput.containerQuantity +
    userInput.grossWeight * weightMultiplier;

  return price;
};

export default calculateDeliveryPrice;
