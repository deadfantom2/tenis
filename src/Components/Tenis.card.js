import React, { useState, memo } from 'react';
import DetailsModal from '../Modal/Details.modal';
import '../Styles/Tenis.card.scss';

const TenisCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    firstname,
    lastname,
    picture,
    country: { code },
    data: { rank, points },
  } = item;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card" onClick={() => setShowModal(true)}>
        <div className="card__photo">
          <img src={picture} className="card__photo_player" alt="card player" />
        </div>
        <div className="card__content">
          <div className="card__content_name">
            <span>
              {firstname} {lastname}
            </span>
          </div>
          <div className="card__content_info">
            <div className="title__info">
              <span>Rank</span>
              <p>#{rank}</p>
            </div>
            <div className="title__info">
              <span>Points</span>
              <p>{points}</p>
            </div>
            <div className="title__info">
              <span>Country</span>
              <p>{code}</p>
            </div>
          </div>
        </div>
      </div>

      <DetailsModal
        showModal={showModal}
        onHideModal={handleCloseModal}
        item={item}
      />
    </>
  );
};

export default memo(TenisCard);
