import React from "react";
import styles from "./Chapter.module.css";
import { useParams, useOutletContext } from "react-router-dom";

function Chapter() {
	// const { id } = useParams();
	// const course = useOutletContext();
	// const chapter = course.Chapters.find(
	// 	(chapter) => String(chapter.chapter) == id
	// );
	const { chapterId } = useParams();
	const course = useOutletContext();
	const chapter = course.chapters.find(
		// convert the number to string for equality check
		(chapter) => String(chapter.chapter) === chapterId
	);
	return (
		<div>
			<h1>{chapter.title}</h1>
			<p>{chapter.description}</p>
			<p className={styles.para}>{chapter.details}</p>
			<br />
			<br />
			<div className={styles.videos}>
				<iframe
					width="800"
					height="560"
					src={chapter.video}
					title="YouTube video player"
					frameborder="1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default Chapter;
