export default class Blank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="user">
          <div className="image">
            <div className="blank avatar"></div>
          </div>
          <div className="content">
            <div className="blank string"></div>
            <div className="blank string"></div>
          </div>
        </div>
        <div className="image">
          <div className="blank image"></div>
        </div>
        <div className="content">
          <div className="blank header"></div>
          <div className="blank description"></div>
          <div className="blank description"></div>
          <div className="blank description"></div>
        </div>
        <style jsx>{`
          .user .content {
            margin-left:15px;
          }

          .user {
            display:flex;
            flex-direction:row;
          }

        `}</style>
      </div>
    );
  }
}