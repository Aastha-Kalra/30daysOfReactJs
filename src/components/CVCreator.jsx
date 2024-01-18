import { useState } from "react";

function CVCreator() {
	const [userData, setUserData] = useState({
		personalInfo: {
			name: "John Doe",
			email: "john.doe@example.com",
		},
		education: [],
		experience: [],
	});

	const [newEducation, setNewEducation] = useState({
		school: "",
		degree: "",
	});

	const addEducation = () => {
		// Buggy line: Incorrectly trying to spread and update the nested array
		setUserData((prev)=>(
			{
				...prev,
				education:[prev.education, newEducation]
			}
		))
	}

	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
			<div className="space-y-2">
				<input
					type="text"
					placeholder="School"
					value={newEducation.school}
					onChange={(e) =>
						setNewEducation({
							...newEducation,
							school: e.target.value,
						})
					}
					className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none"
					data-testid="school-input"
				/>
				<input
					type="text"
					placeholder="Degree"
					value={newEducation.degree}
					onChange={(e) =>
						setNewEducation({
							...newEducation,
							degree: e.target.value,
						})
					}
					className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none"
					data-testid="degree-input"
				/>
			</div>
			<button
				onClick={addEducation}
				className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
				data-testid="add-button"
			>
				Add Education
			</button>
			<div className="space-y-4" data-testid="education-list">
				{userData.education.map((edu, index) => (
					<div
						key={index}
						className="p-4 bg-gray-100 rounded-md"
						data-testid="education-item"
					>
						<p className="font-bold">School: {edu.school}</p>
						<p>Degree: {edu.degree}</p>
					</div>
				))}
			</div>
			<pre className="text-sm" data-testid="user-data-output">
				{JSON.stringify(userData, null, 2)}
			</pre>
		</div>
	);
}

export default CVCreator;
