import { listData } from '../../lib/faker';
import { Typography, Avatar } from '@mui/material';
import { Container, CardStyled, Column } from './list.styled';

export default function DummyList() {
  return (
    <Container component={'ul'}>
      {listData ? (
        listData.map(data => {
          return (
            <CardStyled elevation={3} component={'li'} key={data.id}>
              <Avatar alt={data.name} src={data.avatar} />
              <Column>
                <Typography>{data.name}</Typography>
                <Typography>{data.email}</Typography>
              </Column>
            </CardStyled>
          );
        })
      ) : (
        <Typography>Loading ...</Typography>
      )}
    </Container>
  );
}
