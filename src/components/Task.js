import React, { useState, useEffect } from 'react'
import axios from 'axios'



const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10
}
function Task() {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData)

    const handleSearch = (event) => {
    }

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, [])
    const handleChange = (e) => {
        let val = e.target.value.toLowerCase();
        let res = allData
        if (val == 'pending') {
            res = allData.filter((data) => data.completed);
        } else if (val === 'completed') {
            res = allData.filter((data) => !data.completed);

        }
        setFilteredData(res);
    }


    return (
        <div>
            <select className='' onChange={handleChange}>
                <option>All</option>
                <option>Pending</option>
                <option>Completed</option>
            </select>
            <div>
                <div style={{ padding: 30, marginRight: -90 }}>
                    {filteredData.map((value, index) => {
                        return (
                            <div style={styles} key={value.id}>
                                {value.title}
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Task