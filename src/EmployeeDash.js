import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import View from './components/buttons/View';
import Delete from './components/buttons/Delete';
import Update from './components/buttons/Update';

export default function EmployeeDash() {
    const navigate = useNavigate();
    const [users, setUsers] = useState();
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const getData = () => {
        const id = toast.loading("Loading Data...")
        axios({
            method: 'get',
            url: 'https://634d2e67f5d2cc648e9eb0da.mockapi.io/hrdata',
            timeout: 10000
        }).then((response) => {
            toast.update(id, { render: "Success.", type: "success", isLoading: false, autoClose: 1000 });
            setUsers(response?.data);
        }).catch((error) => {
            toast.update(id, { render: 'Could not load data!', type: "error", isLoading: false, autoClose: 3000 });
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        const filtered = users?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredData(filtered);
    }, [search, users])

    return (
        <div className="EmployeeDash my-auto pt-5">
            <div className="container">
                <h1 className='text-center'>HR Management System</h1>
                <div className="btn border btn-light" onClick={() => navigate("/EmployeeRegis")}>Add Employees</div>
                <div className='d-flex justify-content-between'>
                    <h2>Employees</h2>
                    <form>
                        <input
                            placeholder='Search by name.'
                            type='search'
                            className='search-input'
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </form>
                </div>
                <table className="table table-bordered table-light mt-4">
                    <thead className="thead bg-light">
                        <tr className='table-secondary'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* eslint-disable-next-line */}
                        {/* {users?.filter((val) => {
                            if (search === '') {
                                return val
                            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        })?.map((val) => {
                            return (
                                <tr key={val?.id}>
                                    <td>{val?.id}</td>
                                    <td>{val?.name}</td>
                                    <td>{val?.address}</td>
                                    <td>{val?.dob}</td>
                                    <td>{val?.email}</td>
                                    <td >{val?.phone}</td>
                                    <td className='px-3'>
                                        <div className='row'>
                                            <div className='col btn rounded-0 btn-success'><View users={users} valueid={val?.id} /></div>
                                            <div className='col btn rounded-0 btn-warning'><Update users={users} valueid={val?.id} /></div>
                                            <div className='col btn rounded-0 btn-danger'><Delete getData={getData} valueid={val?.id} /></div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })} */}

                        {filteredData?.length ? filteredData.map((val) => (
                            <tr key={val?.id}>
                                <td>{val?.id}</td>
                                <td>{val?.name}</td>
                                <td>{val?.address}</td>
                                <td>{val?.dob}</td>
                                <td>{val?.email}</td>
                                <td >{val?.phone}</td>
                                <td className='px-3'>
                                    <div className='row'>
                                        <div className='col btn rounded-0 btn-success'><View users={users} valueid={val?.id} /></div>
                                        <div className='col btn rounded-0 btn-warning'><Update users={users} valueid={val?.id} /></div>
                                        <div className='col btn rounded-0 btn-danger'><Delete getData={getData} valueid={val?.id} /></div>
                                    </div>
                                </td>
                            </tr>
                        )) :
                            <tr className='text-center table-dark'>
                                <td colSpan={7}><h1>No Match Found . . . ¯\_(ツ)_/¯</h1></td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}