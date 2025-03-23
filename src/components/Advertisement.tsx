interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}
// removed extra semicolon in order for eslint to pass

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Advertisement;
