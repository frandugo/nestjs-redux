import React from 'react';
import { Navigation } from '../Navigation';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className="wrapper">
				<div className="footer_container">
					<h4>Menu</h4>
					<Navigation theme="" />
				</div>
			</div>
		</footer>
	)
};

export default Footer;

