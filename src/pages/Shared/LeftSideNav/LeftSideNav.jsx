import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideNav = () => {

    const [cetagories, setCetagories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, [])

    return (
        <div className="space-y-2">
            <h2 className="text-3xl"> All cetagories </h2>
            {
                cetagories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    className="block ml-4 text-xl font-semibold"
                    key={category.id}
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;