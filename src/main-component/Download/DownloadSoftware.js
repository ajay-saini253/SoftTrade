import React from 'react';
import { Link } from 'react-router-dom';

const DownloadSoftware = () => {

    return (
        <>
            <section className="pt-4 pb-5">
                        <div className="container">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped text-center align-middle">
                                   <thead>
                                        <tr>
                                            <th>Software Name</th>
                                            <th>Software Version</th>
                                            <th>Release Date</th>
                                            <th>System</th>
                                            <th>Download Software</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>mandi Software</td>
                                            <td>ERP Software</td>
                                            <td>2025-07-15</td>
                                            <td>Windows</td>
                                            <td>
                                                <Link tp="#" className="">Download</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

        </>
    )
};
export default DownloadSoftware;