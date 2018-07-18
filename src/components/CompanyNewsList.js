import React from 'react'
import PropTypes from 'prop-types'
// import * as _ from 'lodash'

import { CompanyNewsDetail } from './CompanyNewsDetail'

export const CompanyNewsList = ({
  news,
  errorResponse
}) => {
  return (
    <div style={{ textAlign: 'left' }}>
      { news.length > 0 &&
      <ul>
          {
            news.map((newAlone, index) => 
            <li key={index}>
              <CompanyNewsDetail newAlone={newAlone}/>
            </li>
            )
          }
        </ul>
      }
    </div>
  )
}

CompanyNewsList.propTypes = {
  companyNews: PropTypes.array,
}
