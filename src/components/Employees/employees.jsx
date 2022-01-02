import React,{ useState , useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
export default function Employees(props){
    const [employees, setEmployees] = useState([]);
    const [vacationsStatus , setVacationsStatus] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getEmployees/')
            .then(response => response.json())
            .then(data => setEmployees(data));
    },[]);
    return(<div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" >Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Hiring Date</TableCell>
                        <TableCell align="center">Jobtitle</TableCell>
                        <TableCell align="center">Birthdate</TableCell>
                        <TableCell align="center">email</TableCell>
                        <TableCell align="center">address</TableCell>
                        <TableCell align="center">Vacancies status</TableCell>
                        <TableCell align="center">profileImage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((emp) => (
                        <TableRow
                            key={emp.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center"  component="th" scope="row">
                                {emp.id}
                            </TableCell>
                            <TableCell align="center" >{emp.name}</TableCell>
                            <TableCell align="center" >{emp.hiringDate}</TableCell>
                            <TableCell align="center" >{emp.jobtitle}</TableCell>
                            <TableCell align="center" >{emp.birthdate}</TableCell>
                            <TableCell align="center" >{emp.email}</TableCell>
                            <TableCell align="center" >{emp.address}</TableCell>
                            <TableCell align="center"><VacStatus id={emp.id}/></TableCell>
                            <TableCell align="center" ><img src={"http://127.0.0.1:8000"+emp.profileImage} width={"100px"} height={"100px"}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></div>
    )}

function VacStatus(props){
    const [vacationsStatus , setVacationsStatus] = useState("")
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getvacationsStatus/'+props.id)
            .then(response => response.json())
            .then(data => setVacationsStatus(data.numToken+"/"+data.numEarned));
    },[]);

    return(
        <div>{vacationsStatus}</div>
    )}

