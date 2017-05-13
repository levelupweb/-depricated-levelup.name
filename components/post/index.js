import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  window.onscroll = null;
  clearInterval(window.startInterval);
}

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        liked: false,
        scrolled: 0
      }
    }
  }

  handleLike(event) {
    event.preventDefault();
    this.setState({
      post: {
        liked: !this.state.post.liked
      }
    })
  }

  componentDidMount() {
    const postContainer = document.querySelector('.site-post');
    const postHeight = postContainer.scrollHeight;

    window.onscroll = () => {
      this.setState({
        post: {
          scrolled: document.body.scrollTop
        }
      })
    }

    window.startInterval = setInterval(() => {
      this.handleScroll(postContainer, postHeight)
    }, 1000)  
  }

  handleScroll(container, height) {
    const scrolled = this.state.post.scrolled;
    const footer = document.getElementsByClassName('floating-footer')[0];
    if (scrolled > 100 && scrolled < height - window.innerHeight) {
      footer.classList.add('visible')
    } else {
      footer.classList.remove('visible')
    }
  }
  

  render() {
    return (
      <article className="article single">
      	<div className="image">
          <img src="../../static/img/feed/example-3.jpg" width="100%" />
          <a className="button circular small ui primary">
            Подписаться
          </a>
        </div>
        <div>
          <div className="bar">
            <div className="user">
              <a href="#"><img className="rounded image ui" src="../static/img/avatar.png" />
              <h5 className="ui header">
                Алексей К.
                <div className="sub header">Программист</div>
              </h5></a>
            </div>
            <div>
              <div className="tags">
                <a href="#">app store</a>
                <a href="#">ios</a>
                <a href="#">приложения</a>
                <a href="#">разработка</a>
              </div>
              <h1 className="ui header">
                Инструкция по публикации iOS-приложения в App Store
                <p className="sub header primary">Подробное руководство, которое поможет вам в самые короткие сроки попасть на самую большую площадку мобильных приложений</p>
              </h1>
            </div>
          </div>

          <div className="content">
            <p>
            Однажды менеджеры <b>Лайв Тайпинг</b> подумали: «Как хорошо было бы иметь инструкцию-чеклист, чтобы ничего не забыть перед публикацией приложения в стор. С ней можно перестать носить всё в голове и не объяснять вновь пришедшим менеджерам, что к чему, а просто скинуть гуглдок». Подумали и написали — для себя. Но потом поняли, что нехорошо скрывать полезную информацию от общественности. Поэтому мы надеемся, что инструкция поможет менеджерам всех остальных студий так же, как помогает нам. 
            </p>
            Тема этой заметки — публикация приложения в <b>App Store</b>. Чуть позже мы опишем порядок действий для публикации в Google Play.
            <p>
            Что же нужно сделать PM`y в ходе публикации:
            </p>
            <ol>
            <li>создать аккаунт в App Store для заказчика, если у заказчика его нет,  или предложить</li>
            <li>опубликовать приложение с нашего аккаунта;</li>
            <li>подготовить маркетинговые материалы (иконка, скриншоты, текст, видео для предпросмотра приложения);</li>
            <li>приложить к сборке сертификат цифровой подписи;</li>
            <li>настроить оплату за пользование приложения;</li>
            <li>Отправить сборку в App Store.</li>
            </ol>
            <p>Идём под кат и разбираем по порядку.</p>
            <h2>Создание аккаунта</h2>
            <p>Чтобы опубликовать приложение в <b>App Store</b>, нужен Apple ID. Он создаётся по этой ссылке. Затем, с помощью Apple ID, войдите на сайт iOS Dev Center. После заполнения всех необходимых полей начнётся процедура регистрации вас как разработчика. Она стоит 99$. Ожидание подтверждения аккаунта займёт от двух недель. </p>
            <p>Подготовка маркетинговых материалов</p>
            <p>Требования к маркетинговым материалам:</p>
            <ul>
            <li>требования стора. Описаны чётко и меняются редко. Изучить их можно здесь;</li>
            <li>требования, которые возникают из задач проекта: что более актуально для ЦА этого приложения, какой маркетинговый план у проекта и т.д. Иногда важно, как это видит клиент — некоторые клиенты готовы использовать простые скриншоты и несложные тексты, другие постоянно меняют мнение, и с этим нужно работать.</li>
            </ul>
            <p>Для срочных релизов или проверки MVP допускается сделать маркетинговые материалы, соответствующие требованиям магазина. В других проектах необходимо сделать так, чтобы маркетинговые материалы были максимальным вкладом в успех проекта.</p>
          </div>
        </div>
        
        <div className="floating-footer block block-shadow">
          <div className="actions">
            <div className="left">
              <div className="item">
                <a href="#" onClick={(event) => {this.handleLike(event)}} className={(this.state.post.liked) ? `ui button medium checked` : `ui button medium`}>
                  {(!this.state.post.liked) ? 
                    <div><i className="fa fa-heart-o"></i>
                    <span>15</span></div>
                    :
                    `Нравится вам и еще 15 людям`
                  }
                </a>
              </div>
              <div className="item">
                <a href="#" className="ui button">
                  <i className="fa fa-send-o"></i>
                  <span>64</span>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="item">
                <a href="#" className="ui button">
                  <i className="fa fa-comment-o"></i>                 
                  <span>2</span>
                </a>
              </div>
            </div>
          </div>

          <div className="prev">
            <i className="fa fa-angle-left"></i>
            <div>
              <Link href="/"><a>Лента</a></Link>
            </div>
          </div>

          <div className="next">
            <b>Далее: </b>
            <a href="#">Инструменты декларативного дизайна</a>
          </div>
        </div>

        <style jsx>{`
          .article {
            margin-bottom:0px!important;
          }

          .article .image {
            margin:0px;
            position:relative;
          }

          .article .image .button {
            position:absolute;
            bottom:-8px;
            left:30px;
          }

          .article .bar {
            display:flex;
            flex-direction:row;
            margin-top:15px;
          }

          .article .bar .tags a {
            margin-right:10px;
          }

          .article .bar .user {
            display:flex;
            flex-direction:column;
            padding-right:20px;
            text-align:center;
          }

          .article .bar .user img {
            margin:auto;
          }

          .article .bar .user h5 {
            margin-top:5px;
            white-space:nowrap;
          }

          .article .bar h1 {
            font-weight:100;
            margin-top:0px!important;
          }

          .article .bar h1 .sub {
            margin-top:10px!important;
          }

          .article .content p,
          .article .content {
            font-size:17px;
            line-height:25px;
          }

          .article .floating-footer {
            position:fixed;
            left:0px;
            padding-left:340px;
            width:100%;
            background:rgba(255,255,255,0.95);
            z-index:9999;
            height:60px;
            display:flex;
            align-items:center;
            bottom:-100px;
            transition:0.2s all ease;
          }

          .article .floating-footer.visible {
            bottom:0px;
          }

          .article .floating-footer .actions {
            display:flex;
            flex-direction:row;
            width:618px;
            justify-content:space-between;
          }

          .article .floating-footer .actions .left .item {
            margin-right:10px;
            color:#46978c;
          }

          .article .floating-footer .actions .item a {
            font-size:16px;
            font-weight:100;
            background:#eee;
          }

          .article .floating-footer .actions .item a.checked {
            background:#fafafa;
          }

          

          .article .floating-footer .actions .item span {
            color:#46978c;
          }

          .article .floating-footer .actions .item i {
            margin-right:5px;
            color:#46978c;
          }

          .article .floating-footer .actions .left {
            display:flex;
            flex-direction:row;
          }

          .article .floating-footer .actions .right {
            display:flex;
            flex-direction:row;
          }

          .article .floating-footer .actions .right .item i {
            color:#000;
          }

          .article .floating-footer .actions .right .item span {
            color:#000;
          }

          .article .floating-footer .next {
            position:absolute;
            right:30px;
            bottom:50%;
            line-height:20px;
            margin-bottom:-20px;
            text-align:right;
          }

          @media screen and (max-width:1320px) {
            .article .floating-footer .next {
              display:none;
            }
          }

          .article .floating-footer .next b {
            display:block;
          }

          .article .floating-footer .next a {
            font-weight:bold;
          }

          .article .floating-footer .prev {
            position:absolute;
            left:30px;
            bottom:50%;
            line-height:20px;
            margin-bottom:-10px;
            text-align:left;
            display:flex;
            align-items:center;
          }

          .article .floating-footer .prev i {
            padding-right:10px;
            font-size:20px;
          }

          .article .floating-footer .prev b {
            display:block;
          }

          .article .floating-footer .prev a {
            font-weight:bold;
          }

          
        `}</style>
      </article>
    );
  }
}
