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
import { Button, Typography } from '@mui/material';


function Admin() {
  const[users,setUsers]=useState([])


    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:6061/user');
        setUsers(response.data.reverse());
        console.log(users)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      fetchData();
    },[]);

const deleteUser = async (id) => {
    alert(id)
     const res = await fetch("http://localhost:6061/deleteusers", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id,
			}),
    })
   /* if(res.data.message==='User deleted successfully'){
      setUsers(users.filter((user)=>user._id!==id))
    }*/
    fetchData()
  };

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
      <Typography variant='h3' style={{color:"black",textAlign:"center"}}>ADMIN PANNEL</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
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
    <TableRow key={user._id}>
      <TableCell>{user._id}</TableCell>
      <TableCell>{user.fname} {user.lname}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.mobile}</TableCell>
      <TableCell>
        <Button variant='contained' color='error' onClick={()=>deleteUser(user._id)}>Delete User <DeleteIcon/></Button>
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
