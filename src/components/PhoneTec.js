import React, { useState } from 'react';
import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import "./styles/Phone.css";

export default function PhoneTec() {
  const [basicActive, setBasicActive] = useState('home');

  const handleBasicClick = ( string) => {
    if (string === basicActive) return;

    setBasicActive(string);
  }

  return (
    <MDBRow>
      <MDBCol size={5}>
        <MDBListGroup light color="warning" small>
          <MDBTabs>
            <MDBListGroupItem action active={basicActive === 'home'} noBorders  className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('home')}>Frontend</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'profile'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('profile')}>Backend</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'messages'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('messages')}>Styles</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'settings'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('settings')}>Other</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
          </MDBTabs>
        </MDBListGroup>
      </MDBCol>

      <MDBCol size={5}>
        <MDBTabsContent >
          <MDBTabsPane show={basicActive === 'home'} >
           <p className="p">JavaScript</p>
           <p className="p">HTML5</p>
           <p className="p">CSS</p>
           <p className="p">SASS</p>
           <p className="p">Typescript</p>
           <p className="p">React.JS</p>
           <p className="p">Angular.JS</p>
           <p className="p">RxJS</p>
           <p className="p">Redux</p>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'profile'}>
          <p className="p">Node.js</p>
           <p className="p">MongoDB</p>
           <p className="p">Firebase</p>
           <p className="p">Mongoose</p>
           <p className="p">Express</p>
           <p className="p">PostMan</p>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'messages'}>
          <p className="p">Bootstrap</p>
           <p className="p">React Bootstrap</p>
           <p className="p">Angular Material</p>
           <p className="p">MDB React</p>
           <p className="p">Figma</p>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'settings'}>
          <p className="p">Git</p>
           <p className="p">Trello</p>
           <p className="p">Agile (Scrum)</p>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
  );
}