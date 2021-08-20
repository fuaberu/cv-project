import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.text, //default text value
			editMode: false,
		};
	}

	// state = {

	// };
	//
	changeEditMode = () => {
		this.setState({
			editMode: !this.state.editMode,
		});
	};
	//update the changed text
	updateValue = () => {
		this.setState({
			editMode: false,
			value: this.refs.TextInput.value, //check useRefs() and change the code in line 25
		});
	};

	renderEditView = () => {
		return (
			<div>
				<input type="text" defaultValue={this.state.value} ref="TextInput" />
				<button onClick={this.changeEditMode}>x</button>
				<button onClick={this.updateValue}>add</button>
			</div>
		);
	};

	renderDefaultView = () => {
		return <div onClick={this.changeEditMode}>{this.state.value}</div>;
	};

	render() {
		return this.state.editMode
			? this.renderEditView()
			: this.renderDefaultView();
	}
}

export default TextInput;
