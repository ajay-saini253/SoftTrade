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
                                            <th>Serial No.</th>
                                            <th>Software</th>
                                            <th>Release Date</th>
                                            <th>System</th>
                                            <th>Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>App Manager v1.0</td>
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