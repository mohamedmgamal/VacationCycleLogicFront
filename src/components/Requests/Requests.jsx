import React,{ useState , useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
export default function OfficialVacations(props){
    const [Requests, setRequests] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getRequests')
            .then(response => response.json())
            .then(data => setRequests(data));
    },[Requests]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [name,setName]=useState("")
    const [hiringDate,setHiringDate]=useState("")
    const [profileImage,setProfileImage]=useState(null)
    const [birthdate,setBirthdate]=useState("")
    const [mobileNo,setMobileNo]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    return(
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Id</TableCell>
                            <TableCell align="center">Emp Name</TableCell>
                            <TableCell align="center">from</TableCell>
                            <TableCell align="center">to</TableCell>
                            <TableCell align="center">numOfDays</TableCell>
                            <TableCell align="center">created at</TableCell>
                            <TableCell align="center">type</TableCell>
                            <TableCell align="center">status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Requests.map((req) => (
                            <TableRow
                                key={req.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center"  component="th" scope="row">
                                    {req.id}
                                </TableCell>
                                <TableCell align="center" >{req.employeeName}</TableCell>
                                <TableCell align="center"  >{req.vFrom}</TableCell>
                                <TableCell align="center"  >{req.vTo}</TableCell>
                                <TableCell align="center"  >{req.numOfDays}</TableCell>
                                <TableCell align="center"  >{req.created}</TableCell>
                                <TableCell align="center"  >{req.type}</TableCell>
                                <TableCell align="center"  >
                                <StatusSelector status={req.status} id={req.id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )}
function StatusSelector(props){
    const [Status , setStatus] = useState(props.status)
    function handleChange(e){
        const data ={status:e.target.value}
        fetch('http://127.0.0.1:8000/updateRequest/'+props.id, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            redirect:"follow",
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.Success)
                {alert(data.Massage)
                setStatus(e.target.value)}
                else
                    console.log(data)
            })
            .catch((error) => {
                alert(error.toString())
            });
    }

    return(
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Status}
            label="status"
            onChange={handleChange}
        >
            <MenuItem value={'draft'}>Draft</MenuItem>
            <MenuItem value={'approved'}>Approved</MenuItem>
            <MenuItem value={'disapprove'}>Disapprove</MenuItem>
        </Select>
    )}



