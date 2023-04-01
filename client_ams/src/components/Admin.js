import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function handleDelete(){

}
function Admin() {
  const[users,setUsers]=useState([])

  
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:6061/user', {name: 'harsha'});
        setUsers(response.data);
        console.log(users)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      fetchData();
    },[]);

 /* return (
    
    <div >
        <h1>Hi</h1>
      {users.map((user) => {
        return(
        <div key={user.id}>
          <h3 style={{'color':'black'}}>{user.fname} {user.lname}</h3>
          <br/>
          <p style={{'color':'black'}}>{user.email}</p>
          <br/>
          <p style={{'color':'black'}}>{user.mobile}</p>
        </div>
      );
      })}
    </div>
    
  );*/
    return (
    <div>
      <h1>Hi</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
{users.map((user) => {
  if (user.email === '2100031411@kluniversity.in') {
    return null; // skip this email
  }

  return (
    <TableRow key={user.id}>
      <TableCell>{user.fname} {user.lname}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.mobile}</TableCell>
      <TableCell>
        <Button variant='contained' color='error' onClick={handleDelete}>Delete User <DeleteIcon/></Button>
      </TableCell>
    </TableRow>
  );
})}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default Admin;
