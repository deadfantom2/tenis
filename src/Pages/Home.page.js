import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTenisesList } from '../Redux/Actions/Tenis.action';
import ListPlayerContainer from '../Containers/List.players';
import useWindowSize from '../utils/useWindowSize';
import { calculateSize } from '../utils/calculateNewSize';
import LoadAndErrorContainer from '../Containers/LoadAndErrorContainer';
import FilterModal from '../Modal/Filter.modal';
import { genders } from '../_helpers/Filter.data';
import {
  ITEM_ACTIVE_FILTER_LIST,
  ITEM_FILTER_LIST,
} from '../Redux/Constants/Tenis.constant';
import '../Styles/Home.page.scss';

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, tenisesList, activeFilters, filterItems } = useSelector(
    (state) => state.tenisesList
  );
  const [sizeImg, setSizeImg] = useState(640);
  const [displayBall, setDisplayBall] = useState(true);
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenisesList());
    isDispalyTenisBall();
    calculateSize(width, 640, setSizeImg);
  }, [width]);

  const isDispalyTenisBall = () => {
    return width < 768 ? setDisplayBall(false) : setDisplayBall(true);
  };

  return (
    <LoadAndErrorContainer loading={false}>
      <div className="home">
        <div className="home_players">
          <h1 onClick={() => setShowModal(true)}>
            List tenises players - click me
          </h1>
          <div className="home_players_content">
            <ListPlayerContainer
              activeFilters={activeFilters}
              filterItems={filterItems}
              items={tenisesList}
            />
          </div>
        </div>

        {displayBall && (
          <div className="home_logo">
            <img
              src="tenisball.png"
              alt="tenis ball"
              width={sizeImg}
              height={sizeImg}
            />
          </div>
        )}
      </div>

      <FilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        dataFilters={{ genders }}
        tenisesList={tenisesList}
        typeFilters={{
          ACTIVE_FILTER_LIST: ITEM_ACTIVE_FILTER_LIST,
          FILTER_LIST: ITEM_FILTER_LIST,
        }}
      />
    </LoadAndErrorContainer>
  );
};

export default HomeScreen;
