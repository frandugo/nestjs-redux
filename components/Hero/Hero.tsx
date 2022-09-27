import React from 'react'
export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
	return (
		<section className="hero">
			<h2>Products Store</h2>
		</section>
	);
};

export default Hero;

