import EditTable from "./EditTable";

const Main = ({ list, delete1, search,onchange,new_data,update_data}) => {
  // console.log(delete1)
  // console.log(update_data)
  return (
    <>
      <main>
        <div className="container">
          <table
            className="table 
        table-striped 
        table-bordered 
        border-primary
        table-hover
        text-center"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {list
                .filter((item) => {
                  let searchTerm = search.toLowerCase();
                  let fname = item.fname.toLowerCase()
                  let lname = item.lname.toLowerCase();
                  let age = item.age.toLowerCase();
                  return searchTerm === ""
                    ? item
                    : fname.includes(searchTerm) ||
                        lname.includes(searchTerm) ||
                        age.includes(searchTerm);
                })
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.fname}</td>
                      <td>{item.lname}</td>
                      <td>{item.age}</td>
                      <td>
                        <div className="row d-flex justify-content-around">
                          <button
                            className="col-lg-5 col-sm-5 btn btn-danger"
                            onClick={() => delete1(item.id)}
                          >
                            DELETE
                          </button>

                          {/* <button className="col-lg-5 col-sm-5 btn btn-outline-warning">
                            EDIT
                          </button> */}

                          <EditTable 
                          item={item}
                          new_data={new_data}
                          onchange={onchange}
                          update_data={update_data}
                          />
                      
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Main;
