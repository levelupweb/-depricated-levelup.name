import React, {Component} from 'react'
import Loader from '../loader'

// 1. Исправить косяк с Checksum
// 2. Сделать сохранение кнопкой
// 3. Сделать загрузку изображений
// 4. Добавить раздел "Описание"
// 5. Сделать тулбар расширяемым для маленьких экранов

export default class Editor extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    try {
      this.quillreact = require('react-quill');
      var Quill = this.quillreact.Quill

      let Inline = Quill.import('blots/inline');
      var icons = Quill.import('ui/icons');

      // Handle custom toolbar options
      class HeaderBlot1 extends Inline { }
      HeaderBlot1.blotName = 'header1';
      HeaderBlot1.tagName = 'h1';
      Quill.register(HeaderBlot1);

      class HeaderBlot2 extends Inline { }
      HeaderBlot2.blotName = 'header2';
      HeaderBlot2.tagName = 'h2';
      Quill.register(HeaderBlot2);

      // Handle custom icons
      icons['header1'] = '<div><i class="fa fa-header" aria-hidden="true"></i><div class="floating ui label">1</div></div>';
      icons['header2'] = '<div><i class="fa fa-header" aria-hidden="true"></i><div class="floating ui label">2</div></div>';

      // Setting default options
      this.modules = {
        toolbar: [
          ['header1', 'header2', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }

      this.formats = [
        'header1', 'header2', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    } catch(err) { console.log(err) }
  }


  render() {
    const Quill = this.quillreact
    if (Quill) {
      return (
        <div>
          <Quill
            value={this.props.value}
            placeholder="Ваш текст здесь..."
            modules={this.modules}
            formats={this.formats}
            onChange={this.props.onChange}
          />
        </div>
      )
    } else {
      return <Loader />
    }
  }
}