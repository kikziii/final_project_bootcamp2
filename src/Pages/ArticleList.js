import Breadcrumb from '../Components/Breadcrumb';
import Media from 'react-bootstrap/Media';
import PageNr from '../Components/Pagination';
import { NavLink } from 'react-router-dom';
import articles from '../data/articles';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const breadcrumbPath = [
  { to: '/', name: 'Home' },
  { to: null, name: 'Articles' },
];

const PER_PAGE = 5;

function ArticleList() {
  const [page, setPage] = useState(0);
  const paginatedArticles = articles.slice((page + 1) * PER_PAGE - PER_PAGE, (page + 1) * PER_PAGE);
  console.log(page);
  return (
    <div>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      <div className="container-fluid wrap article-list-content">
        <ul className="list-styled">
          {paginatedArticles.map(({ title, images, text }, index) => {
            return (
              <Media as="li" className="article-item-list media my-4">
                <img width={140} height={140} className="align-self-middle mr-3" src={images[0]} alt="macaws" />
                <Media.Body>
                  <NavLink className="navbar-brand" to={`/articles/${index}`}>
                    <h5>{title}</h5>
                  </NavLink>
                  <p>{text.slice(0, 600)}...</p>
                </Media.Body>
              </Media>
            );
          })}
        </ul>

        <ReactPaginate
          previousLabel={'«'}
          nextLabel={'»'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(articles.length / PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => {
            setPage(selected);
          }}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-link'}
          nextClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default ArticleList;
