import "./houseCard.scss";

const HouseCard = ({property}) => {
  return (
    <div className="houseCard">
      <div className="imgContainer">
        <img src={property.propertyImageUrl} alt="" />
        {/* <div className="topTag">FEATURED</div>
        <div className="bottomTag">New Listing</div> */}
      </div>
      <div className="textSection">
        <h1>{property.address}</h1>
        <p>{property.district} District, HCM City</p>
        <h2>Area: {property.area} ({'m\u00B2'})</h2>
        <h3>Token: </h3>
      </div>
      <div className="textFooter">
        <span>Available: 12,709 tokens at $50</span>
      </div>
    </div>
  )
}

export default HouseCard