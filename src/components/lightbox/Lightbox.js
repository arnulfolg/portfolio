import React from "react";
import "./Lightbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Lightbox({ image, open, close }) {
	return (
		<dialog className="lightbox" open={open} onClick={close}>
			<div className="background"></div>
			<picture>
				<img src={image} alt="" />
			</picture>
			<FontAwesomeIcon icon={faTimes} />
		</dialog>
	);
}

export default Lightbox;
