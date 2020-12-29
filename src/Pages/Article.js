import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import articles from '../data/articles';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

function Article() {
  const { articleId } = useParams();
  const { title, text, images } = articles[articleId];

  const breadcrumbPath = [
    { to: '/', name: 'Home' },
    { to: '/articles', name: 'Articles' },
    { to: null, name: title },
  ];

  return (
    <div className="container-fluid wrap">
      <SimpleReactLightbox>
        <div>
          <Breadcrumb breadcrumbPath={breadcrumbPath} />
          <section className="mt-5 mb-5 wrap">
            <div className="container">
              <h3>{title}</h3>
              <div className="row">
                <div className="col-12 col-sm-4 gallery">
                  <SRLWrapper options={{}}>
                    <div className="row">
                      <div className="col-12">
                        <a data-fancybox="foo" href={images[0]}>
                          <img className="img-fluid primary-img" src={images[0]} alt="" />
                        </a>
                      </div>
                      {images.map((image, index) => {
                        return (
                          <div key={index} className="col-4">
                            <img className="img-fluid secondary-img" src={image} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </SRLWrapper>
                </div>
                <div className="col-12 col-sm-8">{text}</div>
              </div>
            </div>
          </section>
        </div>
      </SimpleReactLightbox>
    </div>
  );
}

export default Article;
