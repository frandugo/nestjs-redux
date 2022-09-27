import { Navigation } from "../Navigation";

const Header: React.FC = () => {
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

