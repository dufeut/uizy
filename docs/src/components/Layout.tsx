import { useLocation } from 'preact-iso';
import { Sidebar } from './Sidebar';
import { isSidebarOpen, closeSidebar } from '../store';

export function Layout({ children }: { children: any }) {
	const { url } = useLocation();

	return (
		<div class="layout">
			<Sidebar />

			{/* Overlay for mobile */}
			{isSidebarOpen.value && (
				<div class="sidebar-overlay" onClick={closeSidebar} />
			)}

			<main class="main-content">
				{children}
			</main>
		</div>
	);
}
