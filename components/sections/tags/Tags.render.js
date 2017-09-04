import InfiniteScroll from 'redux-infinite-scroll';
import Tag from '../../isomorphic/tagList/Tag.js';

export const renderTags = tags => tags.map((item, i) => 
  <Tag tag={item} size="grid" key={i} />
);

export const renderInfiniteScroll = ({ tags, fetchMoreTags, isFull }) => (
  <InfiniteScroll
    items={ renderTags(tags) }
    loadMore={() => { fetchMoreTags() }} 
    hasMore={!isFull}
    threshold={10}
    elementIsScrollable={false}
    className="tag-list grid ui"
  />
);

export const renderSearchInput = onInput => (
  <input type="text" 
    placeholder="Введите запрос для поиска.."
    onInput={onInput}
  />
);