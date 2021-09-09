import tw from 'tailwind-styled-components'

export const FlexWrapper = tw.div`
px-2 p-2 md:py-14 w-screen h-screen bg-gray-50 
`;

export const TitleBox = tw.div`
absolute md:right-2 md:top-4 max-h-5 flex font-FiraMono p-6 items-center
`;

export const InnerWrapper = tw.div`
w-full h-full grid grid-rows-2 gap-2 place-items-start mx-auto p-5 md:p-20 lg:p-24 md:flex lg:flex m-2 rounded-md drop-shadow-2xl
`;

export const TextAreaContainer = tw.div`
h-full w-full mt-4 md:0 md:mx-2 text-sm text-black border border-gray-200 shadow-xl rounded-sm
`;

export const CopyButton = tw.div`
absolute bottom-6 md:bottom-36 right-12 md:right-32 w-10 h-10
`;

export const textArea = 'bg-gray-100 no-scrollbar font-FiraMono text-xs outline-none focus:ring-2 focus:ring-indigo-400 p-10 px-4  h-full w-full'


export const ReverseButton = tw.button`
absolute bottom-6 md:bottom-36 right-24 md:right-44 w-10 h-10
`