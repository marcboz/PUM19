import styled from 'styled-components';
import { Appbar, Surface } from 'react-native-paper';
import { Text, View, Image } from 'react-native';
import Colors from '../Colors';

export const HeaderBar = styled(Appbar)`
  background: ${Colors.primary};
  padding-top: 40;
  padding-left: 16;
  height: 90;
`;

export const HeaderTitle = styled(Text)`
  font-size: 22;
  font-weight: 500;
  color: ${Colors.primaryText};
`;

interface EntryCardProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export const EntryCard = styled(Surface)`
  margin-top: ${(props: EntryCardProps) => (props.isFirst ? 16 : 0)};
  margin-left: 16;
  margin-right: 16;
  margin-bottom: ${(props: EntryCardProps) => (props.isLast ? 130 : 16)};
  elevation: 4;
  padding-top: 12;
  padding-bottom: 12;
  background: #f9f9f9;
`;

export const EntryText = styled(Text)`
  font-size: 14;
  padding-left: 12;
  padding-right: 12;
  font-weight: 500;
`;

export const EntryInfoRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserAvatar = styled(Image)`
  margin-left: 4;
  width: 32;
  height: 32;
  margin-right: 12;
`;

export const VoteCount = styled(Text)`
  font-size: 20;
  color: #31d837;
  font-weight: 500;
  padding-right: 12;
  padding-bottom: 12;
`;

export const UserInfo = styled(View)`
  flex-direction: row;
  padding: 8px;
  margin-bottom: 12;
  align-items: center;
  background: #f9f9f9;
`;

export const UserName = styled(Text)`
  font-size: 18;
  font-weight: 500;
`;

export const EntryImage = styled(Image)`
  padding-left: 18;
  padding-right: 18;
  align-self: center;
  margin-top: 12;
  margin-bottom: 12;
  height: 200;
  width: 90%;
`;
