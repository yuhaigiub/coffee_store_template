import { commentsData, postsData } from "./data";

export function getPost(id: string) {
	return postsData[id];
}

export function getComments(id: string) {
	return commentsData[id];
}
