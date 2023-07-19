import caloy from '../assets/caloy.jpg';
import jollibee from '../assets/jollibee.jpg';
import manginasal from '../assets/manginasal.jpg';
import chicken from '../assets/24chicken.jpg';
import starbucks from '../assets/starbucks.jpg';
import subway from '../assets/subway.jpg';
import React, { useState } from 'react';

const Profile = () => {
  return (
    <div className="col-lg-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="profile-container">
              <div className="profile-icon">
                <img src={caloy} alt="Profile Picture" />
              </div>
              <h3 className="profile-name">{"Carly Rey"}</h3>
              <br />
              <h4>
                I was always invisible
                Consequences are difficult to face
                Could've been something beautiful, mmm
                But you made it impossible to stay
                So tell me what you got on your mind
                What you got on your mind?
                What you got on your mind?
                Am I keeping you up at night?
                Keeping you up at night?
                I'll never let you be, no
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = ({ imgSrc, title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="col-lg-4 col-md-4 mb-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <p className="text-content">
              {isExpanded ? content : `${content.substring(0, 100)}...`}
              {isExpanded && <span className="hidden-content hide">{content}</span>}
            </p>
          </p>
          {content.length > 100 && (
            <button onClick={handleExpand} className="expand-link">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="row">
      <Profile />
      <div className="col-lg-8">
        <div className="cards-container">
          <div className="row">
            <Review
              imgSrc={jollibee}
              title="Jollibee"
              content="The yum burger has always been iconic! Eat it in the car and everyone will end up craving and might even ask you for a bite HAHA"
            />
            <Review
              imgSrc={manginasal}
              title="Mang Inasal"
              content="Chicken oil on rice is really good!"
            />
            <Review
              imgSrc={chicken}
              title="24 Chicken"
              content="Kimchi rice is not kimchi enough ;("
            />
            <Review
              imgSrc={starbucks}
              title="Starbucks"
              content="I love their cakes! With some cream on top of my coffee, luv et!"
            />
            <Review
              imgSrc={subway}
              title="Subway"
              content="I like their cookies! Just that for now."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
