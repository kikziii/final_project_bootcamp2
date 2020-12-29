import Breadcrumb from '../Components/Breadcrumb';
import map from '../Components/assets/images/map.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card1 from '../Components/assets/images/cards/card1.jpg';
import Card5 from '../Components/assets/images/cards/card5.jpg';
import Card6 from '../Components/assets/images/cards/card6.jpg';
import Card7 from '../Components/assets/images/cards/card7.jpg';

const breadcrumbPath = [
  { to: '/', name: 'Home' },
  { to: null, name: 'About us' },
];

function AboutUs() {
  return (
    <div>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      {/* tabs */}
      <div className="container-fluid wrap ">
        <div className="company-tabs">
          <Tabs defaultActiveKey="company" id="uncontrolled-tab-example">
            <Tab eventKey="company" title="About us">
              <div className="row mb-3">
                <div className="col-sm-12 col-md-2">
                  <a data-fancybox="foo" href={Card7}>
                    <img className="img-fluid small-img" src={Card7} alt="howler monkey" />
                  </a>
                </div>
                <div className="col-sm-12 col-md-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis possimus consequatur
                    excepturi culpa eaque dolor corporis eligendi eum quia, molestiae reiciendis commodi tenetur aut
                    quam debitis eos praesentium alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio inventore, dicta veniam rerum dolorem optio mollitia eius repudiandae sapiente facere
                    temporibus neque voluptas quia consequuntur rem corrupti tempora? Nostrum, atque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Laborum beatae tempora illum, quas laboriosam nemo
                    perferendis deleniti earum nulla dolor cupiditate a eos, pariatur sit hic repellendus, amet eius.
                    Tempora?
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="team" title="Team">
              <div className="row mb-3">
                <div className="col-sm-12 col-md-2">
                  <a data-fancybox="foo" href={Card1}>
                    <img className="img-fluid small-img" src={Card1} alt="macaws" />
                  </a>
                </div>
                <div className="col-sm-12 col-md-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis possimus consequatur
                    excepturi culpa eaque dolor corporis eligendi eum quia, molestiae reiciendis commodi tenetur aut
                    quam debitis eos praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, ipsam! Molestias repellat non atque dolores quas necessitatibus odit commodi, ipsum impedit
                    hic, et culpa vel magnam aspernatur officiis quaerat excepturi! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Iusto laudantium, rem quisquam reprehenderit consequuntur hic,
                    consectetur beatae repellendus incidunt earum quos! Possimus libero reiciendis nisi voluptatum
                    recusandae saepe, veritatis perferendis!
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="history" title="History">
              <div className="row mb-3">
                <div className="col-sm-12 col-md-2">
                  <a data-fancybox="foo" href={Card5}>
                    <img className="img-fluid small-img" src={Card5} alt="colibri" />
                  </a>
                </div>
                <div className="col-sm-12 col-md-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis possimus consequatur
                    excepturi culpa eaque dolor corporis eligendi eum quia, molestiae reiciendis commodi tenetur aut
                    quam debitis eos praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                    nobis libero repudiandae ipsum eos optio quos quas. Dolorum in aut et nemo architecto blanditiis
                    voluptatem dolorem rerum earum culpa. Nesciunt?
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="facts" title="Interesting facts">
              <div className="row mb-3">
                <div className="col-sm-12 col-md-2">
                  <a data-fancybox="foo" href={Card6}>
                    <img className="img-fluid small-img" src={Card6} alt="bird" />
                  </a>
                </div>
                <div className="col-sm-12 col-md-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis possimus consequatur
                    excepturi culpa eaque dolor corporis eligendi eum quia, molestiae reiciendis commodi tenetur aut
                    quam debitis eos praesentium alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                    quos facere omnis? Cupiditate est ut, error et, doloribus recusandae amet impedit rem minima quasi
                    natus dolore deserunt itaque officia debitis. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Accusamus distinctio, voluptatum temporibus quam, dolores, laudantium reiciendis dicta beatae
                    rem incidunt reprehenderit sunt possimus repudiandae obcaecati provident odio. Ad, minus
                    reprehenderit!
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* contacts */}
      <div id="" className="container-fluid">
        <div className="contacts">
          <h3>Contacts</h3>
          <div className="row">
            <div className="col-3">
              <img className="img-fluid small-img" src={map} alt="map" />
            </div>
            <div className="col-3">
              <h4>Address</h4>
              <p>Pils laukums 3, Riga, LV-1050, Latvia</p>
              <h4>Email:</h4>
              <a href="info@gmail.com">info@gmail.com</a>
              <h4>Phone:</h4>
              <p>+371 20202011</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
