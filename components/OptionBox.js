export default ({ label, options }) => {
	return (
		<div class=' py-2 w-full lg:w-1/3'>
			<label for={label} class='uppercase text-xs font-semibold text-gray-800'>
				{label}
			</label>
			<div class='relative mt-3'>
				<select id={label} class='p-3 border border-gray-300 w-full appearance-none'>
					<option value='1'>{options.first}</option>
					<option value='2'>{options.second}</option>
					<option value='3'>{options.third}</option>
				</select>
				<div class='flex items-center pointer-events-none absolute inset-y-0 right-0 px-2'>
					<svg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
						<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
					</svg>
				</div>
			</div>
		</div>
	);
};