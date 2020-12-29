import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { NavLink } from 'react-router-dom';

function PageNr() {
  return (
    <Pagination>
      <Pagination.First disabled />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  );
}

export default PageNr;
