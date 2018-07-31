import React from "react";
import PropTypes from "prop-types";

export const CompanyDetail = ({
  companyName,
  symbol,
  exchange,
  description,
  website
}) => {
  return (
    <div>
      {companyName.length > 0 && <h1> Company Name: {companyName} </h1>}
      {symbol.length > 0 && <h3>Symbol: {symbol}</h3>}
      {exchange.length > 0 && <h3>Market: {exchange} </h3>}
      {description.length > 0 && <p> More Detail: {description} </p>}
      {website.length > 0 &&
        companyName.length > 0 && (
          <a href={website}>Visit Official Website {companyName}</a>
        )}
    </div>
  );
};

CompanyDetail.propTypes = {
  companyName: PropTypes.string,
  symbol: PropTypes.string,
  exchange: PropTypes.string,
  description: PropTypes.string,
  website: PropTypes.string
};
