import React from "react";
import { Button, Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTask = (props) => {
    const {listTask, handleDeleteTask, editTask} = props
    
    
    return(
        <>
            <Table>
                <thead style={{color : "black", background: "aqua"}}>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>User Id</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {listTask.map( (p, i) => {
                        return(
                            <tr>
                                <td>{ p.id }</td>
                                <td>{p.name}</td>
                                <td>{p.user_id}</td>
                                <td>
                                    <Button color="warning" onClick={() => editTask(p.id)}>Edit</Button> &nbsp;
                                    <Button color="danger" onClick={() => handleDeleteTask(p.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default ListTask;