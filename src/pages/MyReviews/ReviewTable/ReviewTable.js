import React from 'react';

const ReviewTable = ({ review }) => {

    console.log(review);
    const { message, reviewName, userName } = review

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <td>
                                {reviewName}
                            </td>
                            <td>
                                {message}
                            </td>
                            <th>
                                <button className="btn btn-ghost">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewTable;