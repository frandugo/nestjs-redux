import React from 'react';
import { Navigation } from '../Navigation';

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
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

