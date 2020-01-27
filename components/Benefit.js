export default ({ title, description, children }) => {
	return (
		<div class='lg:w-1/3 w-full my-6'>
			{children}
			<h4 class='font-semibold text-gray-800 my-3'>{title}</h4>
			<p class='text-gray-600 tracking-wide font-light leading-snug text-sm pr-4'>{description}</p>
		</div>
	);
};