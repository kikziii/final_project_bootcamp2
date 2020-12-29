import Breadcrumb from '../Components/Breadcrumb';

const breadcrumbPath = [
  { to: '/', name: 'Home' },
  { to: null, name: 'Register' },
];

function Registration() {
  return (
    <div>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      {/* registration form */}
      <div className="container-fluid wrap registration" id="content">
        <div className="register-title col-12">
          <h3>Register</h3>
        </div>
        <div className="col-8 registration">
          <form id="registration-form">
            <div className="form-group col-4">
              <label htmlFor="username">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="Username*"
                  placeholder="Username*"
                  required
                />
              </label>
            </div>
            <div className="form-group col-4">
              <label htmlFor="pass">
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  name="Password*"
                  placeholder="Password*"
                  minLength={8}
                  required
                />
              </label>
            </div>
            <div className="form-group col-4">
              <label htmlFor="pass">
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  name="Retype password*"
                  placeholder="Retype password*"
                  minLength={8}
                  required
                  oninput="check(this)"
                />
              </label>
            </div>
            <div className="form-group col-4">
              <label htmlFor="fname">
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  name="First name*"
                  placeholder="First name*"
                  required
                />
              </label>
            </div>
            <div className="form-group col-4">
              <label htmlFor="lname">
                <input type="text" className="form-control" id="lname" name="Last name" placeholder="Last name" />
              </label>
            </div>
            <div className="form-group col-4">
              <label htmlFor="country">
                <select id="country" className="form-control" name="Country*" placeholder="Country*" required>
                  <option placeholder="Country*" value>
                    Country*
                  </option>
                  <option value="Austria">Austria</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Greece">Greece</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Malta">Malta</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Romania">Romania</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Spain">Spain</option>
                  <option value="Sweden">Sweden</option>
                </select>
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="checkbox">
                <input type="checkbox" required />
                <small> Agree with terms and conditions*</small>
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="submit">
                <button type="button submit" className="btn btn-outline-dark register-btn">
                  Register
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
