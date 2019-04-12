'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWrapped {...item} />
                );

            case 'article':
                return (
                    <ArticleWrapped {...item} />
                );
        }
    });
};

const ArticleWrapped = withWrapper(Article);
const VideoWrapped = withWrapper(Video);

function withWrapper(Component) {
  return class extends React.Component {
    getWrapper(views) {
      if (views < 100) {
        return New;
      } 
      if (views >= 1000) {
        return Popular;
      }
    }
    render() {
      const {views} = this.props;
      const Wrapper = this.getWrapper(views) ;

      return Wrapper ? <Wrapper> <Component {...this.props} /> </Wrapper> : <Component {...this.props} />;
    }
  }
}