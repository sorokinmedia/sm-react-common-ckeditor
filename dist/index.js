'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ClassicEditor = _interopDefault(require('@ckeditor/ckeditor5-build-classic'));
var React = require('react');
var React__default = _interopDefault(React);

(function(d){d['ru']=Object.assign(d['ru']||{},{a:"Невозможно загрузить файл",b:"Цитата",c:"Курсив",d:"Жирный",e:"Выбрать заголовок",f:"Заголовок",g:"Виджет изображений",h:"Подпись к изображению",i:"Оригинальный размер изображения",j:"Боковое изображение",k:"Выравнивание по левому краю",l:"Выравнивание по центру",m:"Выравнивание по правому краю",n:"Вставить изображение",o:"Загрузка не выполнена",p:"Ссылка",q:"Нумерованный список",r:"Маркированный список",s:"Параграф",t:"Заголовок 1",u:"Заголовок 2",v:"Заголовок 3",w:"Редактировать альтернативный текст",x:"Убрать ссылку",y:"Редактировать ссылку",z:"Открыть ссылку в новой вкладке",aa:"Для этой ссылки не установлен адрес URL",ab:"Сохранить",ac:"Отмена",ad:"Ссылка URL",ae:"Upload in progress",af:"Редактор, %0",ag:"Редактор",ah:"Альтернативный текст",ai:"Отменить",aj:"Повторить"});})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ck-editor__editable {\n\tmin-height: 300px;\n}\n\n.modal-backdrop {\n\tz-index: 998;\n}\n\n.ck-rounded-corners.ck.ck-balloon-panel {\n\tz-index: 9999;\n}\n\n.ck li {\n\tlist-style-type: inherit;\n}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var CKEditor = function (_Component) {
	inherits(CKEditor, _Component);
	createClass(CKEditor, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(_ref, prevState) {
			var answer = _ref.answer;

			if (answer !== prevState.answer) return { answer: answer };
			return null;
		}
	}]);

	function CKEditor(props) {
		classCallCheck(this, CKEditor);

		var _this = possibleConstructorReturn(this, (CKEditor.__proto__ || Object.getPrototypeOf(CKEditor)).call(this, props));

		_this.state = {};
		return _this;
	}

	createClass(CKEditor, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			ClassicEditor.create(self.refs.editor, {
				toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
				language: 'ru'
			}).then(function (editor) {
				self.editor = editor;

				editor.setData(self.props.initialValue);

				editor.model.document.on('change', function (value) {
					self.props.onChange(editor.getData());
				});
			}).catch(function (error) {
				// eslint-disable-next-line no-console
				console.error(error);
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(_ref2, nextState) {
			var empty = _ref2.empty,
			    value = _ref2.value;

			return !(value === this.props.value && empty === this.props.empty);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(_ref3) {
			var commentId = _ref3.commentId,
			    value = _ref3.value,
			    date = _ref3.date;
			var empty = this.props.empty;

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

	}, {
		key: 'render',
		value: function render() {
			return React__default.createElement(
				'div',
				{ className: 'form-group' },
				React__default.createElement('textarea', {
					// refactor ref
					// eslint-disable-next-line react/no-string-refs
					ref: 'editor',
					className: 'form-control',
					name: 'content',
					id: 'editor',
					rows: 10
				})
			);
		}
	}]);
	return CKEditor;
}(React.Component);

CKEditor.propTypes = {
	date: propTypes.string,
	empty: propTypes.bool,
	commentId: propTypes.number,
	form: propTypes.object,
	onChange: propTypes.func,
	value: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object]),
	initialValue: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object])
};

CKEditor.defaultProps = {
	value: null
};

module.exports = CKEditor;
