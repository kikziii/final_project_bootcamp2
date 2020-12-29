import SliderImage1 from '../Components/assets/images/slider/slide1.jpg';
import SliderImage2 from '../Components/assets/images/slider/slide2.jpg';
import SliderImage3 from '../Components/assets/images/slider/slide3.jpg';
import SliderImage4 from '../Components/assets/images/slider/slide4.jpg';
import SliderImage5 from '../Components/assets/images/slider/slide5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { NavLink } from 'react-router-dom';
import articles from '../data/articles';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage5} alt="First slide" />
        </Carousel.Item>
      </Carousel>

      <div class="container cards-container">
        <CardDeck>
          {articles.slice(0, 3).map(({ title, images, text }, index) => {
            return (
              <Card>
                <Card.Img variant="top" src={images[0]} />
                <Card.Body>
                  <Card.Title>
                    <NavLink to={`/articles/${index}`}>{title}</NavLink>
                  </Card.Title>
                  <Card.Text>{text.slice(0, 200)}...</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </div>
  );
}

export default Home;
