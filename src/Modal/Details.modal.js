import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';
import '../Styles/Details.modal.scss';

const DetailsModal = ({
  showModal,
  onHideModal,
  item: {
    firstname,
    lastname,
    picture,
    sex,
    country: { code, picture: flag },
    data: { rank, points, age, weight, height },
  },
}) => {
  const weightkg = (weight) => {
    return weight / 1000;
  };

  const argsPlayers = [
    {
      id: 1,
      className: 'one',
      title: 'Rank',
      value: '# ' + rank,
    },
    {
      id: 2,
      className: 'two',
      title: 'Points',
      value: points,
    },
    { id: 3, className: 'three', title: 'Country', value: code },
    { id: 4, className: 'four', title: 'Sex', value: sex },
    { id: 5, className: 'five', title: 'Age', value: age },
    {
      id: 6,
      className: 'six',
      title: 'Weight',
      value: weightkg(weight) + ' kg',
    },
    { id: 7, className: 'seven', title: 'Height', value: height + ' cm' },
  ];

  return (
    <Modal
      show={showModal}
      onHide={onHideModal}
      keyboard={false}
      className="custom__modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="border-photo">
          <img src={picture} alt="players" />
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
            {argsPlayers.map(({ id, className, title, value }) => (
              <div className={className} key={id}>
                <span>{title}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="body-down-career">
            <span>Career Title</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default memo(DetailsModal);
