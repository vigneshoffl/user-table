import React from 'react'
import './User.css'


const UserProfile = () => {
    return (
        <>
            <div className='data-container'>
                <div className='heading'>
                    <h1>user Profile</h1>
                </div>

                <div className="user-data">
                    <table>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <p>-</p>
                                </td>
                                <td>Vignesh</td>
                                <td>24</td>
                                <td>toconnectvignesh@gmail.com</td>
                            </tr>
                            <tr>
                                <td><p>-</p></td>
                                <td>Vignesh</td>
                                <td>24</td>
                                <td>toconnectvignesh@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserProfile