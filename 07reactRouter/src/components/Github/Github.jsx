import React, { useEffect, useState } from "react";

function Github () {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/chiragb3005')
        .then(res => res.json())
        .then(data => setData(data))
    }
    ,[])

    return (
        <>
        <div className="text-center p-4 m-4 bg-gray-600 text-white text-5xl">Github Followers: {data.followers}
            <img className="p-4 " src={data.avatar_url} />

        </div>
        
        </>
    )
}


export default Github;