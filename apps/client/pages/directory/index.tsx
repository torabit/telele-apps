import type { NextPage } from 'next';
import { ApolloError, useQuery } from '@apollo/client';
import { GamesData, LIST_GAME_CARD_PAGINATION } from '../../graphql';
import { addApolloState, initializeApollo } from '../../apollo/client';
import { GameCard, SkeletonGameCardList } from '../../components/DataDisplay/GameCard';
import { Tag } from '@/bff/src/graphql.entity';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from '@chakra-ui/react';
interface DirectoryProps {
  data: GamesData | null;
  loading: boolean;
  error: ApolloError | null;
}

const first = 50;

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<GamesData>({
    query: LIST_GAME_CARD_PAGINATION,
    variables: { first },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

const Directory: NextPage<DirectoryProps> = () => {
  const { data, loading, error, fetchMore } = useQuery<GamesData>(LIST_GAME_CARD_PAGINATION, {
    variables: { first },
  });
  const edges = data?.listGamePagination?.edges;
  const pageInfo = data?.listGamePagination.pageInfo;
  const hasNextPage = pageInfo?.hasNextPage ? pageInfo.hasNextPage : false;
  const fetchMoreGame = () =>
    fetchMore({
      variables: {
        first,
        after: data?.listGamePagination.pageInfo.endCursor,
      },
    });

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return (
    <>
      <div className='directory-page'>
        <div className='directory-title'>
          <h1>コンテンツやユーザーを探す</h1>
        </div>
        <InfiniteScroll loadMore={fetchMoreGame} hasMore={hasNextPage} loader={<Spinner />}>
          {loading ? (
            <SkeletonGameCardList />
          ) : (
            <div className='game-cards-container'>
              {edges?.map((edge) => (
                <div className='spacer' key={edge.node.id}>
                  <GameCard
                    gameId={edge.node.id}
                    title={edge.node.title}
                    url={`directory/game/${edge.node?.id}`}
                    src={edge.node.gameIconPath as string}
                    alt={`${edge.node.title}の画像`}
                    tagNames={edge.node.tags as Tag[]}
                    followersQuantity={edge.node.followersQuantity as string}
                  />
                </div>
              ))}
            </div>
          )}
        </InfiniteScroll>
      </div>

      <style jsx>{`
        .directory-page {
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .directory-title {
          overflow-wrap: normal;
          font-size: var(--font-size-4);
          font-weight: var(--font-weight-bold);
        }
        .game-cards-container {
          flex-wrap: wrap;
        }
        .spacer {
          margin: 1rem 0;
        }
        @media screen and (min-width: 600px) {
          .directory-page {
            margin: 0 auto;
            max-width: 180rem;
            display: block;
          }
          .directory-title {
            font-size: var(--font-size-2);
            font-weight: var(--font-weight-bold);
          }
          .game-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
          }
          .spacer {
            margin: 1rem 2rem 1rem 0rem;
          }
        }
      `}</style>
    </>
  );
};

export default Directory;
