import { useLocation } from 'preact-iso';
import { link } from '../config';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href={link('/')} class={url == link('/') && 'active'}>
					Home
				</a>
				<a href={link('/404')} class={url == link('/404') && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
