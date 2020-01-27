import Card from '../components/Card';

// Images
import img1 from '../public/just-booked-1.jpg';
import img2 from '../public/just-booked-2.jpg';
import img3 from '../public/just-booked-3.jpg';
import img4 from '../public/just-booked-4.jpg';

export default () => {
	return (
		<div class='max-w-5xl mx-auto px-4 lg:px-0 lg:py-4'>
			<h3 class='font-semibold text-2xl text-gray-800 my-5'>Just booked in the United States</h3>
			<div class='flex justify-start items-center flex-wrap'>
				<Card houseType='Entire House' houseName='Joshua Tree' title='The Joshua Tree House' img={img1} />
				<Card houseType='Dome House' houseName='Aptos' title='Mushroom Dome Cabin' img={img2} />
				<Card houseType='Earth House' houseName='Orondo' title='Underground Hygge' img={img3} />
				<Card houseType='Entire House' houseName='Pioneertown' title='Off-grid itHouse' img={img4} />
			</div>
		</div>
	);
};
