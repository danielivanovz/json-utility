import tw from 'tailwind-styled-components'

export const TitleBox = tw.div`
absolute right-2 top-4 max-h-10 flex font-FiraMono p-6 items-center
`;

export const FlexWrapper = tw.div`
flex flex-col p-14 h-screen items-center justify-center bg-gray-50 
`;

export const InnerWrapper = tw.div`
w-full h-full flex m-2 p-10 rounded-md drop-shadow-2xl
`;

export const TextAreaContainer = tw.div`
h-full w-full mx-5 text-sm text-black border border-gray-200 shadow-xl rounded-sm
`;

export const CopyButton = tw.div`
absolute bottom-32 right-36 w-10 h-10
`;

export const textArea = 'bg-gray-100 no-scrollbar font-FiraMono text-xs outline-none focus:ring-2 focus:ring-indigo-400 p-10 px-4  h-full w-full'