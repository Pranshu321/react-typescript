import React from "react";
interface ListProps {
	name: {
		first: string;
		last: string;
	}[];
}

const PersonList = (props: ListProps) => {
    return <div>
        {props.name.map(names => {
            return (
                <h2 key={names.first} style={{color: "cyan"}}>{names.first} {names.last}</h2>
            )
        })}
    </div>;
};

export default PersonList;
