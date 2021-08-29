import * as Icon from './icons';

export const Error = () => {
	return (
		<div className='bg-red-200 h-12 px-6 py-2 my-2 rounded-md flex text-xs md:text-xs lg:text-base items-center mx-auto w-3/4 xl:w-2/4'>
			<Icon.Error/>
			<span className='text-red-800'>Please provide a valid JSON</span>
		</div>
	);
};
