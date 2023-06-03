import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import picture from '../../images/picture-for-item.png';
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import user4 from '../../images/user4.jpg';
import user5 from '../../images/user5.jpg';
import user6 from '../../images/user6.jpg';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <NavLink to="/tweets" className={css.moveToTweets}>
          Go to Tweetssss
        </NavLink>
        <img src={picture} alt="head" className={css.picture} />
        <img
          src={user1}
          alt="auto"
          className={`${css.photouser} ${css.photo1}`}
        />
        <img
          src={user2}
          alt="auto"
          className={`${css.photouser} ${css.photo2}`}
        />
        <img
          src={user3}
          alt="auto"
          className={`${css.photouser} ${css.photo3}`}
        />
        <img
          src={user4}
          alt="auto"
          className={`${css.photouser} ${css.photo4}`}
        />
        <img
          src={user5}
          alt="auto"
          className={`${css.photouser} ${css.photo5}`}
        />
        <img
          src={user6}
          alt="auto"
          className={`${css.photouser} ${css.photo6}`}
        />
      </div>
    </div>
  );
};

export default HomePage;
