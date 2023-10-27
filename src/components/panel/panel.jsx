import { Container, TabStyled, LinkStyled } from './panel.styled';
import { Box, Tabs } from '@mui/material';

export default function Panel({ data, value, handleChange }) {
  const sortedData = data.sort((a, b) => a.order - b.order);

  return (
    <Container>
      <Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          aria-label="Menu"
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'primary.accent',
              borderRadius: 4,
              width: 4,
            },
          }}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {sortedData &&
            sortedData.map(val => {
              return (
                <TabStyled
                  key={val.id}
                  onClick={handleChange.bind(this, val.order)}
                  label={<LinkStyled to={`/${val.id}`}>{val.title}</LinkStyled>}
                />
              );
            })}
        </Tabs>
      </Box>
    </Container>
  );
}
