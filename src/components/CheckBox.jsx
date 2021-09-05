/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import checkBoxImg from "../assets/icon-check.svg";

const CheckBox = ({ id, setActive }) => {
	const [checkState, setCheckState] = useState(false);

	return (
		<div>
			<div
				className={checkState ? "checkBox toggled" : "checkBox"}
				onClick={() => {
					setCheckState(!checkState);
					setActive(id);
				}}>
				{checkState && <img src={checkBoxImg} />}
			</div>
		</div>
	);
};

export default CheckBox;
