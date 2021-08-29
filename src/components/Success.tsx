import * as Icon from './icons';

export const Success = () => {
	return (
		<div className='bg-green-200 h-12 px-6 py-2 my-2 rounded-md flex text-xs md:text-xs lg:text-base items-center mx-auto w-3/4 xl:w-2/4'>
			<Icon.Success />
			<span className='text-green-800'> Successfully copied to clipboard. </span>
		</div>
	);
};
