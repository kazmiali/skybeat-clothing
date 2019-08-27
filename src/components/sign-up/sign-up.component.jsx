import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
			return;
		}
		signUpStart(email, password, displayName);

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have a account</h2>
				<span>Sign up with email and password</span>
				<form action='' className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label={'Display Name'}
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label={'E-Mail'}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label={'Password'}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label={'Confirm Password'}
						required
					/>
					<CustomButton type='submit'>{'Sign Up'.toUpperCase()}</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (email, password, displayName) =>
		dispatch(signUpStart({ email, password, displayName }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
