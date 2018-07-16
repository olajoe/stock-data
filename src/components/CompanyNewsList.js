import React from 'react'
import PropTypes from 'prop-types'

import { CompanyNewsDetail } from './CompanyNewsDetail'

export const CompanyNewsList = ({
  news
}) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <ul>
        {
          news.map((newAlone, index) => 
          <li key={index}>
            <CompanyNewsDetail newAlone={newAlone}/>
          </li>
          )
        }
      </ul>
    </div>
  )
}

CompanyNewsList.propTypes = {
  companyNews: PropTypes.array,
}