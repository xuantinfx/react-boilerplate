import React, { useCallback, useEffect, useState } from 'react';
import { Flex, IconButton, Tooltip, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import get from 'lodash/get';
import omit from 'lodash/omit';
import { useTranslation } from 'react-i18next';

interface PaginationProps {
  pageTotal: number;
}
const Pagination = (props: PaginationProps) => {
  const { t } = useTranslation();

  const { pageTotal } = props;
  const [page, setPage] = useState(1);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);

  const { search, pathname } = useLocation();
  const history = useHistory();
  const queryParams = queryString.parse(search);
  useEffect(() => {
    const pageOnUrl = Number(get(queryParams, 'page', 1));
    setPage(pageOnUrl as number);
  }, [queryParams]);

  useEffect(() => {
    setCanPreviousPage(page > 1);
    setCanNextPage(page < pageTotal);
  }, [page, pageTotal]);

  const updatePageNumberOnURL = useCallback(
    (page: number) => {
      const newQueryParams =
        page <= 1 ? omit(queryParams, ['page']) : { ...queryParams, page: page };
      const querySearch = queryString.stringify(newQueryParams);
      history.push(`${pathname}?${querySearch}`);
    },
    [queryParams, history, pathname]
  );

  const previousPage = () => {
    const newPage = page <= 1 ? 1 : page - 1;
    updatePageNumberOnURL(newPage);
  };
  const nextPage = () => {
    const newPage = page >= pageTotal ? pageTotal : page + 1;
    updatePageNumberOnURL(newPage);
  };

  const isShowPagination = pageTotal > 1;
  if (!isShowPagination) return null;
  return (
    <Flex justifyContent="center" m={4} alignItems="center">
      <Flex>
        <Tooltip label={t('Component:Pagination.Previous')}>
          <IconButton
            aria-label="previous-page"
            onClick={previousPage}
            isDisabled={!canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text flexShrink="0" mx={8}>
          {t('Component:Pagination.Page') + ' '}
          <Text fontWeight="bold" as="span">
            {page}
          </Text>
          {' ' + t('Component:Pagination.Of') + ' '}
          <Text fontWeight="bold" as="span">
            {pageTotal}
          </Text>
        </Text>
      </Flex>

      <Flex>
        <Tooltip label={t('Component:Pagination.Next')}>
          <IconButton
            aria-label="next-page"
            onClick={nextPage}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Pagination;
