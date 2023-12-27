import { useState } from "react";
export default function PollComponent() {
	const [voteCount, setVoteCount] = useState(1)
	const handleVote=()=>{
		setVoteCount(()=>voteCount+1)
	}

	return (
		<>
			<h1>Hello there!</h1>
			<h1 id="question">React JS is a </h1>
			<button className="option " onClick={handleVote}>
				<span>library</span> &nbsp;
				<span>{voteCount}</span>
			</button>
			<button className="option "  onClick={handleVote}>
				<span>Framework</span> &nbsp;
				<span>{voteCount}</span>
			</button>
			<button className="option " onClick={handleVote}>
				<span>both</span> &nbsp;
				<span>{voteCount}</span>
			</button>
			<button className="option "  onClick={handleVote}>
				<span>None</span> &nbsp;
				<span>{voteCount}</span>
			</button>
		</>
	);
}
