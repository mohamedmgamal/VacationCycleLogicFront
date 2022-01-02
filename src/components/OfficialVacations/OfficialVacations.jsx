import React,{ useState , useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function OfficialVacations(props){
    const [OfficialVacations, setOfficialVacations] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getOfficialVacations/')
            .then(response => response.json())
            .then(data => setOfficialVacations(data));
    },[]);
    function FechVac (){
       if (!window.confirm("Are you sure to fetch 2021 official vacations "))
           return
        fetch('http://127.0.0.1:8000/requestOfficialVacations/')
            .then(response => response.json())
            .then(data => console.log(data));

    }
    return(
        <div>
            <Button style={{float:"right",margin:"1%"}} onClick={FechVac} variant="outlined">featch official vacations</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" >Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {OfficialVacations.map((vac) => (
                        <TableRow
                            key={vac.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center"  component="th" scope="row">
                                {vac.id}
                            </TableCell>
                            <TableCell align="center" >{vac.name}</TableCell>
                            <TableCell align="center"  >{vac.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )}

