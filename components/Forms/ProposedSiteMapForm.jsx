import proposedSitemap, { setRootName, sitemap } from '@app/store/proposedSitemap'
import { setSiteMap } from '@app/store/proposedSitemap';

import proposedSitemap2, { setSiteMap2 } from '@app/store/proposedSitemap2'
import NestedList, { NestedListB } from '@components/NestedList'
import TextInput from '@components/TextInput'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProposedSiteMapForm = () => {
  const sitemapData = useSelector(state => state.proposedSitemap)

  const dispatch = useDispatch();
  return (
    <>
      <TextInput
        label="Project Name"
        type='text'
        placeholder='Enter Project Name'
        value={sitemapData.rootName}
        onChange={(event) => {
          dispatch(setRootName(event.target.value))
        }}
      />
      <NestedList proposedSitemap={1} setSiteMap={setSiteMap} shortcutKey={'a'} />
      <NestedListB proposedSitemap={2} setSiteMap={setSiteMap2} shortcutKey={'b'} />
    </>
  )
}

export default ProposedSiteMapForm