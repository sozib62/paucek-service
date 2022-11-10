import React from 'react';


const AddServices = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const services = {
            serviceName,
            img,
            price,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Services Added Successfully')
                    form.reset();
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='serviceName' type="text" placeholder="Enter Your service Name" className="input mt-5 input-bordered input-info w-3/4" />
            <input name='img' type="text" placeholder="Enter Your img" className="input mt-5 input-bordered input-info w-3/4" />
            <input name='price' type="text" placeholder="Enter Your price" className="input mt-5 input-bordered input-info w-3/4" />
            <textarea name='description' className="textarea textarea-info mt-5 w-3/4" placeholder="Enter Your description"></textarea>
            <div className=''>
                <button type='submit' className="btn btn-active btn-primary">Add Service</button>
            </div>
        </form>
    );
};

export default AddServices;