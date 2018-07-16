import React from 'react'

export const CompanyNewsDetail = ({
  newAlone
}) => {

  return (
    <div>
      <h2>{ newAlone.headline }</h2>
      <h5>dateTime: { newAlone.datetime } </h5>
      <p> {newAlone.summary} </p>
      <h6>Source: {newAlone.source}</h6>
      <hr/>
    </div>
  )
}

