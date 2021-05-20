import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useQuery from './hooks/useQuery';


function VaccineFinder(props) {
    console.log(useParams())
    const { id='363' } = useParams();
    const age = useQuery('age') || '18';
    const dummy = useQuery('dummy');
    const [centers, setCenters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        
        let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${today}`;
        setLoading(true);
        return axios.get(url)
            .then(res => {
                        const data = {
                            data: res.data,
                            age: age,
                            dummy: dummy ? 'YES' : 'No',
                            id: id
                        }
                        axios.post('https://vaccine-in.herokuapp.com/', data)
                        .then(res => {
                            console.log(res.data)
                            setCenters(res.data)
                            setLoading(false);
                        })
                        .catch(err => console.log(err))
                    }
                )
    }, [age])



    return (
        <div className="col-md-12">
            { loading ? 
                <h2>Loading....</h2> 
            : 
                !centers.length ?
                <h2>No Vaccine Available</h2>
                :
                <div className="table-wrap table-wrapper-scroll-y">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Center</th>
                            <th scope="col">Address</th>
                            <th scope="col">Details</th>
                            <th scope="col">Fees</th>
                        </tr>
                        </thead>
                        <tbody>
                            {console.log(centers)}
                            { centers.map( (center, i) => (
                                <tr>
                                 <td>{i}</td>
                                 <td>{center.name} <span className="badge badge-info">{center.fee_type}</span></td>
                                 <td>{center.address}, {center.block_name}, {center.pincode}</td>
                                 <td>
                                    <table className="table table-striped">
                                        { center.sessions.map( (session, i) => (
                                            <tr>
                                                <td>{session.date}</td>
                                                <td>{session.vaccine}</td>
                                                <td className="bg-success">{session.available_capacity}</td>
                                                <td>Dose1: {session.available_capacity_dose1}</td>
                                                <td>Dose2: {session.available_capacity_dose2}</td>
                                            </tr>
                                        ))}
                                    </table>
                                 </td>
                                 {/* <td>{centervaccine_fees}</td> */}
                             </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            }
      </div>
    )
}

export default VaccineFinder
