import { link } from "../config";

export function NotFound() {
	return (
		<div class="not-found">
			<h1>404</h1>
			<p>Oops! This page doesn't exist.</p>
			<a href={link("/")} class="btn btn-primary">
				Go Home
			</a>
		</div>
	);
}
