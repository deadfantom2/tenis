import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTenisesList } from '../Redux/Actions/Tenis.action';
import TenisCard from '../Components/Tenis.card';
import useWindowSize from '../utils/useWindowSize';
import { calculateSize } from '../utils/calculateNewSize';
import LoadAndErrorContainer from '../Containers/LoadAndErrorContainer';
import '../Styles/Home.page.scss';

const HomeScreen = () => {
  const { loading, tenisesList } = useSelector((state) => state.tenisesList);
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
          <h1>List tenises players</h1>
          <div className="home_players_content">
            {tenisesList.map((item) => (
              <TenisCard key={item.lastname} item={item} />
            ))}
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
    </LoadAndErrorContainer>
  );
};

export default HomeScreen;
