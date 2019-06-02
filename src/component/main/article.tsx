import * as React from 'react';

class Article extends React.Component {
  public render() {
    return (
      <div className="Article">
        <div className="container">
          <div className="title">美国旧金山的所感所想</div>
          <div className="msg clearfix">
            <span>post on <span className="date">2019年6月2日</span></span>&nbsp;|&nbsp;
              <span>in <span className="category">life</span>&nbsp;|&nbsp;</span>
              <span><span className="view">625</span> views</span>
          </div>
          <div className="passage">
            2008年，文章在热播剧《奋斗》中出演男二号向南，引起广泛关注。这也是文章和妻子马伊琍的第二次合作。2009年，文章进入电影届，主演第一部电影《走着瞧》。该片在上海国际电影节新片展映单元和东京国际电影节“亚洲风”单元获奖。文章也凭主演的北京青年马杰一角获得第12届上海国际电影节最受关注新人演员奖。2009年，文章主演电视剧《爱在日月潭》，参演热播电视剧《蜗居》，成功饰演配角小贝，知名度得到进一步提高。2010年，文章与李连杰共同主演文艺片《海洋天堂》，文章饰演青年自闭症患者大福，被认为是中国的“达斯汀·霍夫曼”。文章凭此片获得第14届中国电影华表奖优秀新人男演员奖，第13届上海国际电影节最佳男主角奖和第18届北京大学生电影节最受大学生欢迎男演员奖。该片获得上海国际电影节“金爵奖”，中国电影华表奖优秀故事片奖和第18届北京大学生电影节人文关怀奖。同年，文章主演电视剧《雪豹》，该剧被各大电视台反复播放。文章凭借周卫国一角获得第12届四川电视艺术节金熊猫奖电视剧类最佳男演员，第9届中国金鹰电视艺术节最具人气男演员和第26届中国电视金鹰奖最受观众喜爱男演员。
        </div>
        <div className="more">
          READ MORE
        </div>
        <hr/>
        </div>
      </div>
    );
  }
}

export default Article;
