import React from 'react';

import {
	ErrorImageOverlay,
	ErrorImageText,
	ErrorImageContainer
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false
		};
	}

	static getDerivedStateFromError(error) {
		// process the error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.error(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png'>
						<ErrorImageText>This page is burnt to a Crisp</ErrorImageText>
					</ErrorImageContainer>
				</ErrorImageOverlay>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
