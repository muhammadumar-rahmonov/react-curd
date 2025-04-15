import { Button, FloatingLabel, Form, Table } from "react-bootstrap";
import { DeleteModal, EditModal, SiteSpinner } from "../Components";

function UserCard({ data, loading }) {
  return (
    <>
      {loading ? (
        <SiteSpinner />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map((val, index) => (
                <tr key={val._id}>
                  <td>{index + 1}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.email}</td>
                  <td>
                    <EditModal userId={val._id} users={data.data} />
                    <DeleteModal userId={val._id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default UserCard;
