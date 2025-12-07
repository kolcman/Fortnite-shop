export default function ItemCard(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { finalPrice: price } = {},
    displayAssets = [],
  } = props;

  const image = displayAssets[0]?.full_background || "";

  return (
    <div className="card" id={id}>
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={image} alt={name} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            <p>{description}</p>
            <div className="card-action">
              <button className="btn">Купить</button>
              <span className="right">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
