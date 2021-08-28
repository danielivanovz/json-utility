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
		<div className='flex flex-col p-14 h-screen items-center justify-center bg-gray-50 '>
			<div className='absolute right-0 top-0 max-h-10 flex font-FiraMono p-6 mt-2 items-center'>
				<p className='mx-2'>JSON minify-stringify</p>
				<a href='https://json-utility.vercel.app'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='26'
						height='26'
						fill='currentColor'
						className='bi bi-github hover:text-indigo-400'
						viewBox='0 0 16 16'
					>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
					</svg>
				</a>
			</div>

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

					<CopyToClipboard
						//@ts-ignore
						text={query && JSON.stringify(JSON.stringify(JSON.parse(query)))}
						onCopy={() => {
							setState(true);
						}}
					>
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
