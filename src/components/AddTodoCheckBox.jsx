/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import checkBoxImg from "../assets/icon-check.svg";

const AddTodoCheckBox = ({ getCheckState }) => {
	const [checkState, setCheckState] = useState(false);

	return (
		<div>
			<div
				className={checkState ? "checkBox toggled" : "checkBox"}
				onClick={() => {
					setCheckState(!checkState);
					getCheckState(checkState);
				}}>
				{checkState && <img src={checkBoxImg} />}
			</div>
		</div>
	);
};

export default AddTodoCheckBox;
