import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { navigate, Link } from '@reach/router';

const OneSkiff = (props) => {
    const { id } = props;
    const [ skiff, setSkiff ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/skiffs/" + id)
            .then((res) => {
                const mySkiff = res.data;
                console.log(mySkiff);
                setSkiff(mySkiff);
            })
    }, []);

    return(
        <div>
            <h2>{ skiff.ownerName }'s Skiff</h2>
            <img src={skiff.pictureUrl} alt={`${skiff.ownerNames}'s Boat`}></img>
            <p>
                Build Complete: { skiff.buildComplete ? <span>Yup</span> : <span>Not Yet</span> }
            </p>
            <p>
                Owner Name: { skiff.ownerName }
            </p>
            <p>
                Builder Name: { skiff.builderName }
            </p>
            <p>
                Model Name: { skiff.modelName }
            </p>
            <p>
                Start Date: { skiff.startDate }
            </p>
            <p>
                Finish Date: { skiff.finishDate }
            </p>
            <p>
                Stock Length: { skiff.stockLength }
            </p>
            <p>
                Custom Length: { skiff.customLength }
            </p>
            <p>
                Description: { skiff.description }
            </p>
            <div>
                <button onClick={() => navigate('/skiff/')}>Back to Skiffs</button>
            </div>
        </div>
    )
}

export default OneSkiff;