import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Success } from '../Success';
import { Error } from '../Error';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import * as Icon from '../icons';
import { FlexWrapper, TitleBox, InnerWrapper, TextAreaContainer, CopyButton, ReverseButton, textareaClass, textArea } from './styled';

export const App = observer(() => {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	return (
		<FlexWrapper>
			<TitleBox>
				<p className='mx-2'>JSON minify-stringify</p>
				<a href='https://github.com/heyiamZer0/json-utility'>
					<Icon.Github />
				</a>
			</TitleBox>

			<InnerWrapper>
				<TextAreaContainer>
					<textarea
						autoFocus
						ref={inputRef}
						onChange={() => store.setInput(inputRef.current?.value)}
						className={textareaClass(store.isJSON)}
					/>
					{store.isJSON ? null : <Error />}
				</TextAreaContainer>

				<TextAreaContainer>
					<textarea value={store.input} className={textArea} />
					<ReverseButton onClick={() => store.reverse(inputRef.current?.value!)}>
						{store.input ? <Icon.Back /> : null}
					</ReverseButton>
					<CopyToClipboard
						//@ts-ignore
						text={store.input}
						onCopy={() => {
							store.setCopy(true);
						}}
					>
						<CopyButton>{store.isJSON ? <Icon.Copy /> : null}</CopyButton>
					</CopyToClipboard>
					{store.isCopied ? <Success /> : store.isCopied}
				</TextAreaContainer>
			</InnerWrapper>
		</FlexWrapper>
	);
});
