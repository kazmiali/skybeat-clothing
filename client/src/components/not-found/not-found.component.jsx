import React from 'react';

import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText
} from './not-found.styles';

const NotFound = () => {
	return (
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png'>
				<ErrorImageText>404 - This page is burnt to a Crisp</ErrorImageText>
			</ErrorImageContainer>
		</ErrorImageOverlay>
	);
};

export default NotFound;
