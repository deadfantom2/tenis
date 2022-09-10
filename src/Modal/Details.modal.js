import React, { useEffect, memo } from 'react';
import { Modal } from 'react-bootstrap';
import '../Styles/Details.modal.scss';

const DetailsModal = ({
  showModal,
  setShowModal,
  item: {
    firstname,
    lastname,
    picture,
    sex,
    country: { code, picture: flag },
    data: { rank, points, age, weight, height },
  },
}) => {
  useEffect(() => {}, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const weightkg = (weight) => {
    return weight / 1000;
  };

  const argsPlayers = [
    {
      className: 'one',
      title: 'Rank',
      value: '# ' + rank,
    },
    {
      className: 'two',
      title: 'Points',
      value: points,
    },
    {
      className: 'three',
      title: 'Country',
      value: code,
    },
    {
      className: 'four',
      title: 'Sex',
      value: sex,
    },
    {
      className: 'five',
      title: 'Age',
      value: age,
    },
    {
      className: 'six',
      title: 'Weight',
      value: weightkg(weight) + ' kg',
    },
    {
      className: 'seven',
      title: 'Height',
      value: height + ' cm',
    },
  ];

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      keyboard={false}
      className="custom__modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="border-photo">
          <img src={picture} alt="photo of tenises" />
        </div>
        <div className="modal-body-upper">
          <div className="tenises__name">
            <span>{firstname}</span>
            <p>{lastname}</p>
          </div>
          <div className="tenises__flag">
            <img src={flag} alt="flag of country" />
            <span>{code}</span>
          </div>
        </div>

        <div className="modal-body-down">
          <div className="body-down-info">
            {argsPlayers.map(({ className, title, value }) => (
              <div className={className} key={className}>
                <span>{title}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="body-down-career">
            <span>Career Title</span>
            <p></p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default memo(DetailsModal);
