import "../styles/header.css";


const Header = () => {
	return (
		<header className="scs-header">
			<div className="scs-header-inner">
				<a href="/" className="scs-brand">
					<svg
						className="scs-brand-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.7"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
						<path d="m9 12 2 2 4-4" />
					</svg>

					<span className="scs-logo">
						SmartContract<span>Security</span>
					</span>
				</a>

				<span className="scs-header-tagline">
					AI-Assisted Smart Contract Auditor
				</span>
			</div>
		</header>
	);
};

export default Header;