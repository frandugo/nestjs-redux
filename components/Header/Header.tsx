import { Navigation } from "../Navigation";

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
	return (
		<header className='header'>
			<div className="wrapper">
				<div className="header__container">
					<h1>Products</h1>
					<Navigation theme="header" />
				</div>
			</div>
		</header>
	);
};

export default Header;

