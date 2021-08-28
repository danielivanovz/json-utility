import { useEffect, useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Success } from './components/Success';
import { Error } from './components/Error';

const isJSONCheck = (input: string | undefined) => {
	try {
		JSON.parse(input!);
		return true;
	} catch (error) {
		return false;
	}
};

export const App = () => {
	const [query, setQuery] = useState<string | undefined>('');
	const [isCopied, setState] = useState<boolean>(false);
	const [isError, setError] = useState<boolean>(false);
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const updateQuery = () => {
		const inputText = inputRef.current;
		setQuery(inputText?.value);
	};

	useEffect(() => {
		setState(false);
		try {
			JSON.parse(query!);
			setError(false);
		} catch (error) {
			setError(true);
		}
	}, [query]);

	return (
		<div className='flex flex-row p-28 h-screen items-center justify-center bg-gray-50 '>
			<div className='w-full h-full flex m-2 p-10 rounded-md drop-shadow-2xl'>
				<div className='h-full w-full mx-5 text-sm text-black border border-gray-200 shadow-xl rounded-sm'>
				<textarea
					autoFocus
					ref={inputRef}
					onChange={updateQuery}
					className='bg-gray-100 no-scrollbar font-FiraMono text-xs outline-none focus:ring-2 focus:ring-indigo-400 p-10 px-4  h-full w-full'
				/>
				{isError ? <Error /> : null}
				</div>
				<div className='h-full w-full mx-5 text-sm text-black border border-gray-200 shadow-xl rounded-sm'>
					<textarea
						value={isJSONCheck(query!) ? JSON.stringify(JSON.stringify(JSON.parse(query!))) : query}
						className='bg-gray-100 no-scrollbar font-FiraMono text-xs outline-none focus:ring-2 focus:ring-indigo-400 p-10 px-4  h-full w-full'
					/>
					<CopyToClipboard text={query!} onCopy={() => setState(true)}>
						<button className='relative -m-20 bottom-8 w-10 h-10'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10 text-gray-500 transition-colors duration-300 hover:text-indigo-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
								/>
							</svg>
						</button>
					</CopyToClipboard>

					{isCopied ? <Success /> : null}
				</div>
			</div>
		</div>
	);
};
