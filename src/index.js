import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './style.css'

class CKEditor extends Component {
	static getDerivedStateFromProps({ answer }, prevState) {
		if (answer !== prevState.answer) return { answer }
		return null
	}

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		const self = this;
		ClassicEditor
			.create(self.refs.editor, {
				toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
				language: 'ru',
			})
			.then((editor) => {
				self.editor = editor;

				editor.setData(self.props.initialValue);

				editor.model.document.on('change', (value) => {
					self.props.onChange(editor.getData())
				});
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.error(error);
			});
	}

	shouldComponentUpdate({ empty, value }, nextState) {
		return !(value === this.props.value && empty === this.props.empty);
	}

	componentDidUpdate({ commentId, value, date }) {
		const { empty } = this.props
		if (empty) {
			this.editor.setData('');
		}
		if (commentId !== this.props.commentId && value !== this.props.value) {
			this.editor.setData(this.props.value);
		}
		if (date !== this.props.date) {
			this.editor.setData(this.props.value);
		}
	}

	// componentWillUnmount() {
	// 	this.editor.destroy()
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// }

	render() {
		return (
			<div className="form-group">
				<textarea
					// eslint-disable-next-line react/no-string-refs
					ref="editor"
					className="form-control"
					name="content"
					id="editor"
					rows={10}
				/>
			</div>)
	}
}

CKEditor.propTypes = {
	date: PropTypes.string,
	empty: PropTypes.bool,
	commentId: PropTypes.number,
	form: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object
	]),
	initialValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object
	])
};

CKEditor.defaultProps = {
	value: null
};

export default CKEditor
