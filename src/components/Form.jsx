const Form = ({ data, onchange, click, sTerm, doSearch }) => {
  return (
    <>
      <div className="container p-4">
        <form onSubmit={click}>
          <div className="row">
            <div className="col">
              <label htmlFor="search" className="form-label">
                <h1>Search:</h1>
              </label>
              <input
                type="text"
                id="search"
                value={sTerm}
                onChange={doSearch}
                className="form-control"
                aria-describedby="search item"
              />
              <h1>{sTerm}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  <h3>First Name :</h3>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  aria-describedby="first name"
                  name="fname"
                  value={data.fname}
                  onChange={onchange}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  <h3>Last Name</h3>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  aria-describedby="last name"
                  name="lname"
                  value={data.lname}
                  onChange={onchange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  <h3>Age : </h3>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  aria-describedby="user age"
                  name="age"
                  value={data.age}
                  onChange={onchange}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", height: "100%", fontSize: "50px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <h1>
          {data.fname} {data.lname} {data.age}
        </h1>
      </div>
    </>
  );
};

export default Form;
