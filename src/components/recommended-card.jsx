import "../styles/recommended-card.css";

const RecommendedCard = () => {
  return (
    <div className="recommendedCard">
      {/* <img src="" alt="" /> */}
      <div className="recommendedCard_img"></div>
      <p className="recommendedCard_text">Martell VS</p>
      <button className="recommendedCard_btn button">Buy now</button>
    </div>
  );
};

export default RecommendedCard;
