import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const EditSkiff = (props) => {
    const { skiffId } = props;
    const [ buildComplete, setBuildComplete ] = useState(false);
    const [ ownerName, setOwnerName ] = useState("");
    const [ builderName, setBuilderName ] = useState("");
    const [ modelName, setModelName ] = useState("Standard");
    const [ startDate, setStartDate ] = useState("");
    const [ finishDate, setFinishDate ] = useState("");
    const [ stockLength, setStockLength ] = useState();
    const [ customLength, setCustomLength ] = useState();
    const [ pictureUrl, setPictureUrl ]= useState("");
    const [ description, setDescription ] = useState("");
    const [ errs, setErrs ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/skiffs/" + skiffId)
            .then((res) => {
                const mySkiff = res.data;
                console.log(mySkiff);
                setBuildComplete(mySkiff.buildComplete);
                setOwnerName(mySkiff.ownerName);
                setBuilderName(mySkiff.builderName);
                setModelName(mySkiff.modelName);
                setStartDate(mySkiff.startDate);
                setFinishDate(mySkiff.finishDate);
                setStockLength(mySkiff.stockLength);
                setCustomLength(mySkiff.customLength);
                setPictureUrl(mySkiff.pictureUrl);
                setDescription(mySkiff.description);
            })
    }, []);
    
    const submitForm = (e) => {
        e.preventDefault();
        // do something with axios
        axios.put("http://localhost:8000/api/skiffs/" + skiffId, {
            buildComplete: buildComplete,
            ownerName: ownerName,
            builderName: builderName,
            modelName: modelName,
            startDate: startDate,
            finishDate: finishDate,
            stockLength: stockLength,
            customLength: customLength,
            pictureUrl: pictureUrl,
            description: description,
        })
        .then((res)=> {
            if (res.data.errors) {
                console.log(res.data.errors);
                setErrs(res.data.errors);
            } else {
                console.log(res.data);
                navigate(`/skiff/${res.data._id}`);
            }
        })
        .catch((err) =>{
            console.log(err);
            // code block to catch errors and do something with them
        });
    }
    return(
        <div>
            <h2>Edit Skiff</h2>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                        type="checkbox"
                        name="buildComplete"
                        checked={buildComplete}
                        // when you have a bool and you need to toggle it; change it to the opposite
                        onChange={(e) => setBuildComplete( !buildComplete )}
                    />
                    <label>Build Complete</label>
                    {
                        errs.buildComplete ?
                            <span className="error-text">{ errs.buildComplete.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Owner's Name</label>
                    <input 
                        type="text"
                        name="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                    />
                    {
                        errs.ownerName ?
                            <span className="error-text">{ errs.ownerName.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Builder's Name</label>
                    <input 
                        type="text"
                        name="builderName"
                        value={builderName}
                        onChange={(e) => setBuilderName(e.target.value)}
                    />
                    {
                        errs.builderName ?
                            <span className="error-text">{ errs.builderName.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Model Name</label>
                    <select 
                        name="modelName"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}>
                            <option value="Standard">Standard</option>
                            <option value="Wide Body">Wide Body</option>
                            <option value="Jumbo">Jumbo</option>
                            <option value="Flat Bottom">Flat Bottom</option>
                    </select>
                    {
                        errs.modelName ?
                            <span className="error-text">{ errs.modelName.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Build Start Date</label>
                    <input 
                        type="date"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    {
                        errs.startDate ?
                            <span className="error-text">{ errs.startDate.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Build Finish Date</label>
                    <input 
                        type="date"
                        name="finishDate"
                        value={finishDate}
                        onChange={(e) => setFinishDate(e.target.value)}
                    />
                    {
                        errs.finishDate ?
                            <span className="error-text">{ errs.finishDate.message }</span>
                            : null
                    }
                </div>
                <div>
                    <label>Stock Length</label>
                    <input 
                        type="number"
                        name="stockLength"
                        value={stockLength}
                        onChange={(e) => setStockLength(e.target.value)}
                    />
                </div>
                <div>
                    <label>Custom Length</label>
                    {
                        errs.customLength ?
                            <span className="error-text">{ errs.customLength.message }</span>
                            : null
                    }
                    <input 
                        type="number"
                        name="customLength"
                        value={customLength}
                        onChange={(e) => setCustomLength(e.target.value)}
                    />
                    
                </div>
                <div>
                    <label>URL Picture of your skiff</label>
                    <input 
                        type="url"
                        name="pictureUrl"
                        value={pictureUrl}
                        onChange={(e) => setPictureUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                >Update This Skiff</button>
                <button onClick={() => window.history.back()}>Back</button>
            </form>
        </div>
    )
}

export default EditSkiff;