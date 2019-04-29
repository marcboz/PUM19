import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  HeaderBar,
  HeaderTitle,
  EntryCard,
  EntryText,
  EntryInfoRow,
  UserAvatar,
  VoteCount,
  UserInfo,
  UserName,
  EntryImage
} from './components';
import { getHot } from '../api';
import { Divider } from 'react-native-paper';

interface Props {}

interface Author {
  avatar: string;
  color: number;
  login: string;
  sex: string;
}

interface HotDataItem {
  app: string;
  author: Author;
  blocked: boolean;
  body: string;
  comments_count: number;
  date: Date;
  favorite: boolean;
  id: number;
  status: string;
  user_vote: number;
  vote_count: number;
  embed?: {
    preview: string;
  };
}

interface State {
  hot: HotDataItem[];
  currentPage: number;
}

export default class Home extends React.Component<Props, State> {
  public state = {
    hot: [],
    currentPage: 2
  };
  public async componentDidMount() {
    const response = await getHot(1, 12);
    const bufferResponse = await getHot(2, 12);
    this.setResponseToState(response.data.data, bufferResponse.data.data);
  }

  private setResponseToState = (response: any, bufferResponse: any) => {
    this.setState({ hot: [...response, ...bufferResponse] });
  };

  private formatContentString = (content: string): string =>
    content.replace(/\<(.*?)\>/g, '').replace(/\&quot;/g, `"`);

  private handleScroll = async (event: any) => {
    const { nativeEvent } = event;
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const { currentPage, hot } = this.state;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - 100
    ) {
      const response = await getHot(currentPage + 1, 12);
      this.setState({
        hot: [...hot, ...response.data.data],
        currentPage: currentPage + 1
      });
    }
  };

  private mapEntries = () =>
    this.state.hot.map(
      (item: HotDataItem, index: number, arr: HotDataItem[]) => (
        <EntryCard
          key={item.id}
          isFirst={!index}
          isLast={index === arr.length - 1}
        >
          <EntryInfoRow>
            <UserInfo>
              <UserAvatar source={{ uri: item.author.avatar }} />
              <UserName>{item.author.login}</UserName>
            </UserInfo>
            <VoteCount>+{item.vote_count}</VoteCount>
          </EntryInfoRow>
          <EntryText>{this.formatContentString(item.body)}</EntryText>

          {item.embed && (
            <>
              <Divider />
              <EntryImage source={{ uri: item.embed.preview }} />
            </>
          )}
        </EntryCard>
      )
    );

  public render() {
    return (
      <View>
        <HeaderBar>
          <HeaderTitle>Goronce</HeaderTitle>
        </HeaderBar>
        <ScrollView onScroll={this.handleScroll} scrollEventThrottle={400}>
          {this.mapEntries()}
        </ScrollView>
      </View>
    );
  }
}
