import { NavLink } from 'react-router-dom';

function Breadcrumb({ breadcrumbPath }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbPath.map(({ to, name }) => {
          if (to === null) {
            return (
              <li className="breadcrumb-item active" aria-current="page">
                {name}
              </li>
            );
          }
          return (
            <li className="breadcrumb-item">
              <NavLink to={to}>{name}</NavLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
